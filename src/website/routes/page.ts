import { Route } from "@base";
import { Request, Response } from "express";

Route({
  title: "Página Inicial",
  description: "Bem-vindo à página inicial!",
  isAdmin: false,

  get: async (req: Request, res: Response) => {
    res.render("pages/home", {
      title: "Página Inicial",
      description: "Bem-vindo à página inicial!",
    });
  },
  
  post: async (req: Request, res: Response) => {
    res.send({ message: "Requisição POST recebida na página inicial!" });
  },
});
