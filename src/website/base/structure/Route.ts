import { Application, RequestHandler } from "express";
import chalk from 'chalk';
import path from "path";
import fs from "fs";

interface RouteProps {
  title: string;
  description: string;
  isAdmin: boolean;
  
  get?: RequestHandler;
  post?: RequestHandler;
  put?: RequestHandler;
  delete?: RequestHandler;
  patch?: RequestHandler;
  all?: RequestHandler;
}

const routeRegistry: { path: string; route: RouteProps }[] = [];

// Registra uma rota
export function Route(props: RouteProps) {
  const callerPath = getCallerFilePath(); // Obter o caminho do arquivo que registrou a rota
  const routePath = resolveRoutePath(callerPath);
  routeRegistry.push({ path: routePath, route: props });
}

// Inicializa as rotas no Express
export function initializeRoutes(app: Application, globals: any) {
  routeRegistry.forEach(({ path, route }) => {
    if (route.get) app.get(path, route.get);
    if (route.post) app.post(path, route.post);
    if (route.put) app.put(path, route.put);
    if (route.delete) app.delete(path, route.delete);
    if (route.patch) app.patch(path, route.patch);
    if (route.all) app.all(path, route.all);

    console.log(chalk.hex('#40ca34')(`{/} ${chalk.hex('#206ba8').underline(path)} route loaded!`));
  
  });
}

// Carrega automaticamente as rotas do diretório
export function loadRoutes(dir: string) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      loadRoutes(fullPath); // Processa subdiretórios
    } else if (file === "page.ts" || file === "page.js") {
      require(fullPath); // Apenas importa o arquivo para executá-lo
    }
  });
}

// Resolve o nome da rota com base no caminho do arquivo
function resolveRoutePath(filePath: string): string {
  const routePath = filePath
    .replace(/\\/g, "/") // Corrige separadores de caminho para ambientes Windows
    .replace(/^.*\/routes/, "") // Remove o prefixo até "routes"
    .replace(/\/page\.[tj]s$/, "") // Remove "/page.ts" ou "/page.js"
    .replace(/\[([^\]]+)\]/g, ":$1"); // Converte "[id]" para ":id"

  return routePath === "" ? "/" : routePath; // Se vazio, é a rota raiz "/"
}

// Obtém o caminho do arquivo que chamou a função `Route`
function getCallerFilePath(): string {
  const originalFunc = Error.prepareStackTrace;

  try {
    const err = new Error();
    Error.prepareStackTrace = (_, stack) => stack;
    const stack = err.stack as any;

    const caller = stack[2]; // O chamador é o 3º item na pilha
    return caller.getFileName();
  } finally {
    Error.prepareStackTrace = originalFunc;
  }
}
