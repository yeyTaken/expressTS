import { Request, Response } from "express";
import { Route } from "@base"; // Ajuste o caminho conforme necessário

Route({
  title: "Página Inicial",
  description: "Bem-vindo à página inicial!",
  isAdmin: false,

  route({ globals, database, functions }) {

    return {
      async get(req: Request, res: Response) {
        // const id: string = '1234567890';
        // const user = await functions.getUser(id);

        res.render("pages/home", {
          title: "Página Inicial",
          description: "Bem-vindo à página inicial!",
        });
      },

      post(req: Request, res: Response) {
        res.send({ message: "Requisição POST recebida na página inicial!" });
      },
    };
  },
});
