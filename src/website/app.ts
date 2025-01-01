import express, { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";

import { globals } from "@/index";
import { Route } from '@base/structure/types/Route'

import('dotenv/config');
var app: Application = express();
var PORT: number = Number(process.env.PORT) || 3000;

// Configurações do Express
app.set("view engine", "ejs"); // Define o EJS como template engine
app.set("views", path.join(__dirname, "views")); // Ajusta o caminho das views

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false })); // Para processar os dados do formulário
app.use(express.json());

var loadRoutes = (dir: string): void => {
  fs.readdirSync(dir).forEach((file) => {
    var filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      loadRoutes(filePath); // Carrega subdiretórios
    } else if (file.endsWith(".ts") || file.endsWith(".js")) {
      try {

        var routeModule = require(filePath);
        var route = routeModule.default;

        if (route instanceof Route) {
 
           route.run({ app, globals });

          globals.functions.log(`Rota "${route.name}" carregada com sucesso!`, "success");
        } else {
          globals.functions.log(`O arquivo ${file} não exporta uma instância válida de Route.`);
        }
      } catch (error: any) {
        globals.functions.log(`Erro ao carregar a rota ${file}: ${error.message}`);
      }
    }
  });
};

var routesDir = path.join(__dirname, "routes");
loadRoutes(routesDir);

app.get("*", (req: Request, res: Response) => {
  res.status(404).render("error/404");
});

// Iniciar servidor
app.listen(PORT, () => {
  globals.functions.log(`Servidor rodando em http://localhost:${PORT}`, 'client')
});