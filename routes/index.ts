import { Application, Express, Router } from 'express'
import { HomeRoutes } from './home-routes'
import { QueryRoutes } from './query-routes'

// Setamos o nosso basePath padrão da nossa API
const basePath = "/api/v1"

// Criamos os nossos objetos que conterão as nossas rotas.
const homeRoutes: HomeRoutes = new HomeRoutes(basePath)
const queryRoutes: QueryRoutes = new QueryRoutes(basePath)

/**
 * Inicializa as rotas.
 * 
 * @param app objeto que contém a aplicação do Express.
 */
function initialize (app: Application): void {

  // Setando as rotas no Router do Express.
  homeRoutes.setup(Router())
  queryRoutes.setup(Router())

  // Colocando nossa aplicação para utilizar as nossas rotas recém adicionadas ao Router.
  app.use(homeRoutes.getBasePath(), homeRoutes.getRouter())
  app.use(queryRoutes.getBasePath(), queryRoutes.getRouter())
}

export { initialize }
