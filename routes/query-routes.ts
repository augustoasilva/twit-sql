import { Router } from 'express'
import { Route, BaseRoutes } from './base-routes'
import { QueryController } from '../controllers/query-controller'

export class QueryRoutes extends BaseRoutes {

  private controller: QueryController = new QueryController()
  private router: Router = Router()
  private routes: Array<Route> = [
    {
      path: "/query",
      type: "get",
      middlewares: [],
      controllerFunction: this.controller.get
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