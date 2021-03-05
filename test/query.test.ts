// Durante os testes, a variavel 'env' é definida como 'test'.
process.env.NODE_ENV = 'test'

import chai from 'chai'
import chaiHttp from 'chai-http'
import { Router } from 'express'
import server from '../index'
import { Route } from '../routes/base-routes'
import QueryRoutes from '../routes/query-routes'

const should = chai.should()

let queryRoutes: QueryRoutes


chai.use(chaiHttp)

describe('Queries', () => {

  describe('Classe de rotas', () => {
    before(() => {
      // Setamos o nosso basePath padrão da nossa API
      const basePath = "/api/v1"

      // Criamos o nossos objeto que conterá as nossas rotas.
      queryRoutes = new QueryRoutes(basePath)

      // Criamos um array vazio para testar o nosso arquivo de rotas
      const array: Array<Route> = []

      // Como o objeto é criado com um array padrão, aqui nós setamos o nosso array vazio nele.
      queryRoutes.setRoutes(array)
    })

    it('Deve retornar um array vazio.', () => {
      const routesArray = queryRoutes.getRoutes()
      routesArray.should.be.a('array')
      routesArray.should.have.lengthOf(0)
    })

    it('Deve fazer o setup do objeto com o array vazio e retornar falso.', () => {
      const setupFlag = queryRoutes.setup(Router())
      setupFlag.should.be.equal(false)
    })

    it('Deve fazer o setup do objeto com um array não fazio e retornar verdadeiro.', () => {
      queryRoutes.setRoutes([
        {
          path: "/query",
          type: "get",
          middlewares: [],
          controllerFunction: () => { return }
        }
      ])
      const setupFlag = queryRoutes.setup(Router())
      setupFlag.should.be.equal(true)
    })

    it('Deve retornar a função Router() do express passada no setup.', () => {
      const router = queryRoutes.getRouter()
      router.should.be.a('function')
    })
  })

  describe('Endpoints', () => {
    /**
 * Testa a rota '/query' com o método GET.
 */
    describe('[GET]/api/v1/query', () => {
      it('Deve retornar o STATUS 200 e um JSON contendo o campo mensagem.', (done) => {
        chai.request(server)
          .get('/api/v1/query')
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.message.should.be.a('string')
            done()
          })
      })
    })

    /**
     * Testa a rota '/query' com o método POST.
     */
    describe('[POST]/api/v1/query', () => {
      it('Deve retornar o STATUS 201 e um JSON contendo o campo mensagem.', (done) => {
        chai.request(server)
          .post('/api/v1/query')
          .end((err, res) => {
            res.should.have.status(201)
            res.body.should.be.a('object')
            res.body.message.should.be.a('string')
            done()
          })
      })
    })

    /**
     * Testa a rota '/query' com o método PUT.
     */
    describe('[PUT]/api/v1/query', () => {
      it('Deve retornar o STATUS 405 e um JSON contendo o campo mensagem.', (done) => {
        chai.request(server)
          .put('/api/v1/query')
          .end((err, res) => {
            res.should.have.status(405)
            res.body.should.be.a('object')
            res.body.message.should.be.a('string')
            done()
          })
      })
    })

    /**
     * Testa a rota '/query' com o método DELETE.
     */
    describe('[DELETE]/api/v1/query', () => {
      it('Deve retornar o STATUS 405 e um JSON contendo o campo mensagem.', (done) => {
        chai.request(server)
          .delete('/api/v1/query')
          .end((err, res) => {
            res.should.have.status(405)
            res.body.should.be.a('object')
            res.body.message.should.be.a('string')
            done()
          })
      })
    })
  })
})