import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helment from 'helmet'
import * as routes from './routes/index'

const app: Application = express()
const PORT: number = 3000

// Aplicando o CORS em todas as rotas.
app.use(cors())

// Aplicando o HELMET em todas as rotas.
app.use(helment())

// Aplicando o parser de JSON em todas as rotas.
app.use(bodyParser.json())

// Inicializando o arquivo de rotas.
routes.initialize(app)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
