import { Express, Router } from 'express'
import { HomeRoutes } from './home-routes'
import { QueryRoutes } from './query-routes'

const basePath = "/api/v1"

const homeRoutes: HomeRoutes = new HomeRoutes(basePath)
const queryRoutes: QueryRoutes = new QueryRoutes(basePath)

function bootstrap (app: Express): void {

  // Setando as rotas no Router do Express
  homeRoutes.setup(Router())
  queryRoutes.setup(Router())

  // const queryRouter = queryRoutes.setup(Router())

  app.use(homeRoutes.getBasePath(), homeRoutes.getRouter())
  app.use(queryRoutes.getBasePath(), queryRoutes.getRouter())
}
// initializeRoutes()
export { bootstrap }

