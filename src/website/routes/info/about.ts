import { Route } from '@base/structure/types/Route'
import { Request, Response } from "express";

export default new Route({
  name: "/info/about", // Nome da rota example.com(/home).
  title: "Sobre nós", // Titulo do site.
  description: "Página de informações sobre nós.", // descrição da página.
  isAdmin: false,

  async run({ app, globals }) {
    app.get(this.name, async (req: Request, res: Response) => {

      res.render("pages/info/about", {
        title: this.title,
        description: this.description,
      });
    });

  },
});