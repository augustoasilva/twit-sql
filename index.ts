import express from 'express'
import bodyParser from 'body-parser'
import * as routes from './routes/index'

const app = express()
const PORT: number = 3000

// Aplicando o parser de JSON em todas as rotas.
app.use(bodyParser.json())

// Inicializando o arquivo de rotas.
routes.initialize(app)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
