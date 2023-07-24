//  criando primeira aplicação e subindo servidor:
// acessar: https://expressjs.com/pt-br/starter/hello-world.html tem o passo a passo. 

import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import { Usuario } from './models/Usuario.js';
import moment from 'moment';

const app = express()
app.use(
    express.urlencoded({
        extended:true,
    })
);
app.use(express.json())


const host = 'localhost'
const port = 5000

//endpoint inicial
app.get('/', (req, res) => { 
    res.send('Servidor rodando')
})
//endpoint do Usuario
app.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.find()

    res.status(200).json(usuarios)
});

//pesquisando usuario por id
app.get('/usuario/:id', async (req,res)=>{
    const id = req.params.id
    const usuario = await Usuario.findOne({_id: id})
    res.status(200).json(usuario)
    
})
//endpoint do Usuario Post
app.post('/usuario', async (req, res) => {
    /*Acessar atraves de desestruturação de OBJETO */ 
    const {nome, idade, ativo, email} = req.body;
    const usuario = {nome,idade,ativo,email}


/*Ciar o usuario atraves do mongoose*/
    const usuarioDB = await Usuario.create(usuario)
    res.status(201).json({
    data: usuarioDB,
    mensagem: "usuario criado com sucesso"
});
});

//endpoint do Usuario Atualizar Update
app.put('/usuario/:id', async (req, res) => {
    const id = req.params.id

    //desestruturando o body, para nao precisar colocar req.body,nome, req.body.idade ...
    const {nome, idade, ativo, email} = req.body;
    const usuario = {nome,idade,ativo,email};

  await Usuario.updateOne({_id: id}, usuario)
  res.status(200).json("usuario atualizadinho");
});

// deletando um usuario do banco 
app.delete('/usuario/:id', async(req,res)=> {
    //primeiro buscar o usuario, antes de deletar
    const id = req.params.id
    const usuarioDB = await Usuario.findOne({_id :id})
    await Usuario.deleteOne({_id: usuarioDB})
    // agora descobrindo a data e hora do delete
    let date = moment(new Date()).format('DD/MM/YYYY hh:mm:ss')
   
    res.status(200).json(`O usuario ${usuarioDB.nome} foi excluído com sucesso as:${date} !`)
});

//Criando constantes pra acessar o login do banco de dados
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

//conectando no banco mongo atlas
/* Mongo ATLAS */
mongoose.connect (`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.aybtzfg.mongodb.net/dc_fs12?retryWrites=true&w=majority`)

/*MONGO LOGAL PELO APP BAIXADO NO PC*/
// mongoose.connect(`mongodb://${DB_PASS_COMPASS}:${DB_PASS_COMPASS}@localhost:27017/?authMechanism=DEFAULT`)
    .then(() => {
        console.log('BD CONECTADO');
})
.catch (error => {
    console.log('erro ao conectar', error);
})
app.listen(port, () => {
    console.log(`Estou ouvindo na porta http://${host}:${port}`)
});