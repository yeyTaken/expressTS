import { initializeRoutes } from "@base";
import express, { Application, Request, Response } from "express";
import path from "path";
import chalk from "chalk";
import fs from "fs";

import { globals } from "@/index";

import('dotenv/config');
var app: Application = express();
var PORT: number = Number(process.env.PORT) || 3001;

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
        require(filePath); // Apenas importa o arquivo para registrar a rota
      } catch (error: any) {
        globals.log.success(`Erro ao carregar a rota ${file}: ${error.message}`);
      }
    }
  });
};

// Carregar rotas e inicializá-las
var routesDir = path.join(__dirname, "routes");
loadRoutes(routesDir);
initializeRoutes(app, globals); // Inicializa todas as rotas registradas


var routesDir = path.join(__dirname, "routes");
loadRoutes(routesDir);

app.get("*", (req: Request, res: Response) => {
  res.status(404).render("error/404");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log();
  globals.log.success(chalk.hex('#40ca34')(`Local: ${chalk.hex('#206ba8').underline(`http://localhost:${PORT}`)}`))
});