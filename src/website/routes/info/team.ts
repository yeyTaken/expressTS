import { Route } from '@base/structure/types/Route'
import { Request, Response } from "express";

export default new Route({
  name: "/info/team", // Nome da rota example.com(/home).
  title: "Time de desenvolvimento", // Titulo do site.
  description: "Página de informação do time de desenvolvimento.", // descrição da página.
  isAdmin: false,

  async run({ app, globals }) {
    app.get(this.name, async (req: Request, res: Response) => {

      res.render("pages/info/team", {
        title: this.title,
        description: this.description,
      });
    });

  },
});