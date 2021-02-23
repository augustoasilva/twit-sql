import { Router, Request, Response, NextFunction } from 'express'

export interface Route {
  path: string,
  type: string,
  middlewares: Array<any>,
  controllerFunction: any
}

export class BaseRoutes {
  private basePath: string
  // private router: Router = Router()

  public constructor(basePath: string) {
    this.basePath = basePath
  }

  public getBasePath (): string {
    return this.basePath
  }

  public setBasePath (newBasePath: string): string {
    return this.basePath = newBasePath
  }

}
