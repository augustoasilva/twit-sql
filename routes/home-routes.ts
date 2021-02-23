import { Router, Request, Response } from 'express'
import { Route, BaseRoutes } from './base-routes'

/**
 * Classe que conterá as rotas referentes à home/raiz, ou path '/'.
 */
export class HomeRoutes extends BaseRoutes {

  /**
   * Variável que receberá o Router do express.
   */
  private router: Router = Router()

  /**
   * Array contendo as rotas com o path, tipo, middlewares e funções.
   * 
   * Declaramos aqui todas as nossas rotas referente ao path '/'.
   */
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
   * Método getter da variável routes.
   * 
   * @returns as rotas relacionadas à classe.
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
  public setRoutes (newRoutes: Array<Route>): void {
    this.routes = newRoutes
  }

}