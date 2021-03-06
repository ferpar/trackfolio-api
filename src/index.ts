import { Server } from './server'
import './env'

export const app = Server.bootstrap().app;
export const server = app.listen(app.get("port"), () => {
    console.log("app listening on port " + app.get("port"))
})