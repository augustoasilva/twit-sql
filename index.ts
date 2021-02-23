import express from 'express'
import bodyParser from 'body-parser'
import indexRoutes from './routes/index'
import * as newIndexRoutes from './routes/new-index'

const app = express()
const PORT: number = 3000

// Aplicando o parser de JSON em todas as rotas.
app.use(bodyParser.json())

// Inicializando o arquivo de rotas da 'home'
app.use(indexRoutes)

newIndexRoutes.initializeRoutes()

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
