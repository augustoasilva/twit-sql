interface Route {
  path: string,
  middlewares: Array<Function>,
  controllerFunction: Function
}

class BaseRoutes {
  private routes: Array<Route>

  public constructor(routes: Array<Route>) {
    this.routes = routes
  }

  public getRoutes (): Array<Route> {
    return this.routes
  }

  public setRoutes (routes: Array<Route>) {
    return this.routes = routes
  }
}

export { Route, BaseRoutes }
