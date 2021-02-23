import express from 'express'
import bodyParser from 'body-parser'
import indexRoutes from './routes/old.index'
import * as routes from './routes/index'

const app = express()
const PORT: number = 3000

// Aplicando o parser de JSON em todas as rotas.
app.use(bodyParser.json())

// Inicializando o arquivo de rotas da 'home'
// app.use(indexRoutes)

// Inicializando o arquivo de rotas Geral
routes.bootstrap(app)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
