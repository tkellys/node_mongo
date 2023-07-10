//  criando primeira aplicação e subindo servidor:
// acessar: https://expressjs.com/pt-br/starter/hello-world.html tem o passo a passo. 

const express = require('express')
const app = express()
const host = 'localhost'
const port = 5000

app.get('/', (req, res) => {
    res.send('Oi mundo')
})
app.listen(port, () => {
    console.log(`Estou ouvindo na porta http://${host}:${port}`)
  });