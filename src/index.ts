import { Server } from './server'

export const app = Server.bootstrap().app;
export const server = app.listen(app.get("port"))