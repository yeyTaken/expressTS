import express, { Application } from "express";
import { globals } from "@/index";

const app: Application = express();

interface RouteProps {
  app: typeof app;
  globals: typeof globals;
}

export type RouteType = {
  name: string;
  title: string;
  description: string;
  isAdmin: boolean;
  run(props: RouteProps): any;
};

export class Route {
  name: string;
  title: string;
  description: string;
  isAdmin: boolean;
  run: (props: RouteProps) => any;

  constructor(options: RouteType) {
    this.name = options.name;
    this.title = options.title;
    this.description = options.description;
    this.isAdmin = options.isAdmin;
    this.run = options.run;
  }
}
