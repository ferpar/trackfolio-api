import express from "express";
import bodyParser from "body-parser";

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

    this.routes();
  }

  private config(): void {
    this.app.set("port", process.env.PORT || 8081);
    this.app.use(bodyParser.json());
  }

  private routes(): void {
    this.app.get("/api/ping", (req, res) => {
      res.send("pong");
    });
  }
}
