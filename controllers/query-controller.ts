import { Request, Response } from 'express'
import { Controller } from "./controller-interface";

export default class QueryController implements Controller {

  constructor() {

  }

  public get (req: Request, res: Response): void {
    //TODO: Implementar a lógica de realizar queries através do método GET, com passagem dos parâmetros na URL.
    res.status(200).send({
      message: "Rota \'/api/v1/query/\' recebeu o método GET e respondeu com uma função do QueryController."
    })
  }

  public post (req: Request, res: Response): void {
    //TODO: Implementar a lógica de realizar queries através do método POST, com passagem dos parâmetros no body em um JSON.
    res.status(201).send({
      message: "Rota \'/api/v1/query/\' recebeu o método POST e respondeu com uma função do QueryController"
    })
  }

  public put (req: Request, res: Response): void {
    res.status(405).send({
      message: "Rota \'/api/v1/query/\' recebeu o método PUT, mas este método não é permitido."
    })
  }

  public delete (req: Request, res: Response): void {
    res.status(405).send({
      message: "Rota \'/api/v1/query/\' recebeu o método DELETE, mas este método não é permitido."
    })
  }

}