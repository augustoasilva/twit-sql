import { Router } from 'express'
import { Route, BaseRoutes } from './base-routes'
import { QueryController } from '../controllers/query-controller'

export class QueryRoutes extends BaseRoutes {

  private controller: QueryController = new QueryController()

  /**
   * Variável que receberá o Router do express.
   */
  private router: Router = Router()

  /**
   * Array contendo as rotas com o path, tipo, middlewares e funções.
   * 
   * Declaramos aqui todas as nossas rotas referente ao path '/query'.
   */
  private routes: Array<Route> = [
    {
      path: "/query",
      type: "get",
      middlewares: [],
      controllerFunction: this.controller.get
    },
    {
      path: "/query",
      type: "post",
      middlewares: [],
      controllerFunction: this.controller.post
    },
    {
      path: "/query",
      type: "put",
      middlewares: [],
      controllerFunction: this.controller.put
    },
    {
      path: "/query",
      type: "delete",
      middlewares: [],
      controllerFunction: this.controller.delete
    },
  ]

  constructor(basePath: string) {
    super(basePath)
  }

  /**
   * Seta as rotas e as coloca no Router do express.
   * 
   * @param router Router da aplicação Express para adicionar rotas nele.
   * @returns uma flag que indica se o setup aconteceu 'true', ou não aconteceu 'false'.
   */
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

  /**
   * Método getter da variável router.
   * 
   * @returns o objeto Router do Express relacionado às rotas da classe.
   */
  public getRouter (): Router {
    return this.router
  }

  /**
   * Método getter da variável router.
   * 
   * @returns o objeto Router do Express relacionado às rotas da classe.
   */
  public getRoutes (): Array<Route> {
    return this.routes
  }

  /**
   * Método setter para a variável basePath.
   * 
   * Deve ser utilizado antes de setar as rotas na inicialização da aplicação.
   * 
   * @param newRoutes array que contém as novas rotas a serem utilizadas.
   */
  public setRoutes (newRoutes: Array<Route>) {
    return this.routes = newRoutes
  }

}