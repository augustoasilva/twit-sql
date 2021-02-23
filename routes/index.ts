import { Express, Request, Response, Router } from 'express'
import { Route, BaseRoutes } from './base-routes'

const homeRoutesArray: Array<Route> = [{
  path: "/",
  type: "get",
  middlewares: [],
  controllerFunction: (req: Request, res: Response) => { res.send({ message: "Rota \'/api/v1/\' recebeu o método GET !" }) }
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

const queriesArray: Array<Route> = [{
  path: "/query",
  type: "get",
  middlewares: [],
  controllerFunction: (req: Request, res: Response) => { res.send({ message: "Rota \'/api/v1/query/\' recebeu o método GET !" }) }
}
]

const basePath = "/api/v1"

const homeRoutes: BaseRoutes = new BaseRoutes(basePath, homeRoutesArray, Router())
const queryRoutes: BaseRoutes = new BaseRoutes(basePath, queriesArray, Router())

function bootstrap (app: Express): void {

  const homeRouter = homeRoutes.setup(Router())
  const queryRouter = queryRoutes.setup(Router())

  app.use(homeRoutes.getBasePath(), homeRouter)
  app.use(queryRoutes.getBasePath(), queryRouter)
}
// initializeRoutes()
export { bootstrap }

