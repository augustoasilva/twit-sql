import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helment from 'helmet'
import { config } from 'dotenv'
import * as routes from './routes/index'

config()

const app: Application = express()
const PORT: string | undefined = process.env.PORT

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

export default app