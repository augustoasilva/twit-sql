import { Router, Request, Response, NextFunction } from 'express'

interface Route {
  path: string,
  type: string,
  middlewares: Array<any>,
  controllerFunction: any
}

class BaseRoutes {
  private basePath: string
  private routes: Array<Route>

  public constructor(basePath: string, routes: Array<Route>, router: Router) {
    this.basePath = basePath
    this.routes = routes
  }

  public setup (router: Router): Router {
    let error: number = 0
    this.routes.forEach((element: Route) => {
      switch (element.type) {
        case 'get':
          router.route(element.path).get(element.middlewares, element.controllerFunction)
          break;

        case 'post':
          router.route(element.path).post(element.middlewares, element.controllerFunction)
          break;

        case 'put':
          router.route(element.path).put(element.middlewares, element.controllerFunction)
          break;

        case 'delete':
          router.route(element.path).delete(element.middlewares, element.controllerFunction)
          break;

        default:
          error = 1
          break;
      }
    });

    return router
  }

  public getBasePath (): string {
    return this.basePath
  }

  public setBasePath (newBasePath: string): string {
    return this.basePath = newBasePath
  }

  public getRoutes (): Array<Route> {
    return this.routes
  }

  public setRoutes (newRoutes: Array<Route>) {
    return this.routes = newRoutes
  }
}

export { Route, BaseRoutes }
