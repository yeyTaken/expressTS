import { Route } from '@base/structure/types/Route'
import { Request, Response } from "express";

export default new Route({
  name: "/auth0/register",
  title: "Registro",
  description: "Registre-se no nosso site.",
  isAdmin: false,

  async run({ app, globals }) {
    app.get(this.name, async (req: Request, res: Response) => {

      res.render("pages/auth0/register", {
        title: this.title,
        description: this.description,
      });
    });

  },
});