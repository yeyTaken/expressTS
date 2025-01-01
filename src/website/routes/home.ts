import { Route } from '@base/structure/types/Route'
import { Request, Response } from "express";

export default new Route({
  name: "/", // Nome da rota example.com(/home).
  title: "Página Inicial", // Titulo do site.
  description: "Bem-vindo à nossa página inicial!", // descrição da página.
  isAdmin: false,

  async run({ app, globals }) {
    app.get(this.name, async (req: Request, res: Response) => {

      res.render("pages/home", {
        title: this.title,
        description: this.description,
      });
    });

  },
});