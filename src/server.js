//  criando primeira aplicação e subindo servidor:
// acessar: https://expressjs.com/pt-br/starter/hello-world.html tem o passo a passo. 

import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'


const app = express()
const host = 'localhost'
const port = 5000

//endpoint inicial
app.get('/', (req, res) => {
    res.send('Servidor rodando')
})

//Criando constantes pra acessar o login do banco de dados
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

//conectando no banco mongo atlas
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.aybtzfg.mongodb.net/usuario?retryWrites=true&w=majority`)
.then(()=> {
console.log('BD CONECTADO');
})
.catch(error => {
    console.log('erro ao conectar', error);
})
 app.listen(port, () => {
     console.log(`Estou ouvindo na porta http://${host}:${port}`)
   });