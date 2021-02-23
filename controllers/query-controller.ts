import { Request, Response } from 'express'
import { Controller } from "./controller-interface";

export class QueryController implements Controller {

  constructor() {

  }

  public get (req: Request, res: Response): void {
    res.send({ message: "Rota \'/api/v1/query/\' recebeu o método GET e respondeu com uma função do QueryController" })
  }

  public post (req: Request, res: Response): void {

  }

  public put (req: Request, res: Response): void {

  }

  public delete (req: Request, res: Response): void {

  }

}