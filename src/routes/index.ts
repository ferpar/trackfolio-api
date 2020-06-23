import { NextFunction, Request, Response, Router } from 'express';
import { PingRoute } from './ping';

export class ApiRoutes {
    public static path = '/api';
    private static instance: ApiRoutes;
    private router: Router = Router();

    private constructor() {
        this.router.get('/', this.get)
        this.router.use(PingRoute.path, PingRoute.router)
    }

    static get router() {
        if (!ApiRoutes.instance) {
            ApiRoutes.instance = new ApiRoutes();
        }
        return ApiRoutes.instance.router;
    }

    private get = async (req: Request, res: Response, next: NextFunction ) => {
        res.status(200).json({ online: true })
    }
}