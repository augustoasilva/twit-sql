// Durante os testes, a variavel 'env' é definida como 'test'.
process.env.NODE_ENV = 'test'

import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../index'

const should = chai.should()

chai.use(chaiHttp)

describe('Queries', () => {

  /**
   * Testa a rota '/query' com o método GET.
   */
  describe('[GET]/route', () => {
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
  describe('[POST]/route', () => {
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
  describe('[PUT]/route', () => {
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
  describe('[DELETE]/route', () => {
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