import { Route } from '@base/structure/types/Route'
import { Request, Response } from "express";

export default new Route({
  name: "/auth0/login",
  title: "Login",
  description: "Faça login no nosso site.",
  isAdmin: false,

  async run({ app, globals }) {
    app.get(this.name, async (req: Request, res: Response) => {

      res.render("pages/auth0/login", {
        title: this.title,
        description: this.description,
      });
    });

  },
});