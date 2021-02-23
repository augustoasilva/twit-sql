import { Request, Response, Router } from 'express'
import { Route, BaseRoutes } from './base-routes'

const homeRoutesArray: Array<Route> = [{
  path: "/",
  middlewares: [],
  controllerFunction: (req: Request, res: Response) => { res.send({ success: true }) }
}]

const homeRoutes: BaseRoutes = new BaseRoutes(homeRoutesArray)

function initializeRoutes (): boolean {

  return true
}
// initializeRoutes()
export { initializeRoutes }

