import express from 'express';
import UsuarioController from "../controllers/usuarioController.js";

const routerUsuario = express.Router();

routerUsuario
    .get('/usuarios', UsuarioController.buscarTodos)
    .get('/usuario/:id', UsuarioController.buscarPorId)
    .post('/usuario', UsuarioController.criarUsuario)
    .put('/usuario/:id', UsuarioController.atualizarUsuario)
    .delete('/usuario/:id', UsuarioController.deletarUsuario)


export default routerUsuario