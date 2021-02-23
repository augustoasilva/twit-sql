import { Router, Request, Response } from 'express'
import { Route, BaseRoutes } from './base-routes'

export class HomeRoutes extends BaseRoutes {

  private router: Router = Router()
  private routes: Array<Route> = [
    {
      path: "/",
      type: "get",
      middlewares: [],
      controllerFunction: (req: Request, res: Response) => {
        res.send({ message: "Rota \'/api/v1/\' recebeu o método GET !" })
      }
    },
    {
      path: "/",
      type: "post",
      middlewares: [],
      controllerFunction: (req: Request, res: Response) => {
        res.send({ message: "Rota \'/api/v1\' recebeu o método POST !" })
      }
    }
  ]

  constructor(basePath: string) {
    super(basePath)
  }

  public setup (router: Router): boolean {
    this.router = router
    const routes: Array<Route> = this.routes

    if (routes.length === 0) {
      return false
    }

    routes.forEach((element: Route) => {
      if (element.type === "get") {
        router.route(element.path).get(element.middlewares, element.controllerFunction)
      }

      if (element.type === "post") {
        router.route(element.path).post(element.middlewares, element.controllerFunction)
      }

      if (element.type === "put") {
        router.route(element.path).put(element.middlewares, element.controllerFunction)
      }

      if (element.type === "delete") {
        router.route(element.path).delete(element.middlewares, element.controllerFunction)
      }

    });

    return true
  }

  public getRouter (): Router {
    return this.router
  }

  public getRoutes (): Array<Route> {
    return this.routes
  }

  public setRoutes (newRoutes: Array<Route>) {
    return this.routes = newRoutes
  }

}