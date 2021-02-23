/**
 * Interface criando o tipo Route.
 * 
 * O tipo Route deve seguir essa estrutura:
 * { 
 *   path: string, 
 *   type: string, 
 *   middlewares: Array<any>, 
 *   controllerFunction: any
 * }
 * 
 */
export interface Route {
  path: string,
  type: string,
  middlewares: Array<any>,
  controllerFunction: any
}

/**
 * Classe mãe para servir de base para a criação das rotas.
 */
export class BaseRoutes {
  /**
   * Variável que guarda o caminho da URL base.
   * 
   * Exemplo, se a url for www.meusite.com, e o basePath for '/api', a url criada será:
   * www.meusite.com/api
   * 
   * Esse basePath, será preposto às rotas que criaremos. Se tivermos uma rota: '/users' a rota do exemplo ficará:
   * www.meusite.com/api/users
   */
  private basePath: string
  // private router: Router = Router()

  public constructor(basePath: string) {
    this.basePath = basePath
  }

  /**
   * Método getter para a variável basePath.
   * 
   * @returns a variável basePath.
   */
  public getBasePath (): string {
    return this.basePath
  }

  /**
   * Método setter para a variável basePath.
   * 
   * Deve ser utilizado antes de setar as rotas na inicialização da aplicação.
   * 
   * @param newBasePath novo basePath para ser utilizado.
   */
  public setBasePath (newBasePath: string): void {
    this.basePath = newBasePath
  }

}
