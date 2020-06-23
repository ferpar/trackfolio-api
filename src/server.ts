import express from "express";
import bodyParser from "body-parser";

import { ApiRoutes } from './routes';

export class Server {
  public static bootstrap(): Server {
    return new Server();
  }

  public app: express.Application;

  constructor() {
    //create express application
    this.app = express();

    //configure application
    this.config();

    //add routes
    this.routes();
  }

  private config(): void {
    this.app.set("port", process.env.PORT || 8081);
    this.app.use(bodyParser.json());
  }

  private routes(): void {
    this.app.use(ApiRoutes.path, ApiRoutes.router)
  }
}
