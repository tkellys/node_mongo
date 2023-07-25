import { Usuario } from "../models/Usuario";

class UsuarioController {

    //endpoint do Usuario
    static buscarTodos = async (req, res) => {
        const usuarios = await Usuario.find()

        res.status(200).json(usuarios)
    };

    //pesquisando usuario por id
    static buscarPorId = async (req, res) => {
        const id = req.params.id
        const usuario = await Usuario.findOne({ _id: id })
        res.status(200).json(usuario)

    };
    //Usuario Post
    static criarUsuario = async (req, res) => {
        /*Acessar atraves de desestruturação de OBJETO */
        const { nome, idade, ativo, email } = req.body;
        const usuario = { nome, idade, ativo, email }

        /*Ciar o usuario atraves do mongoose*/
        const usuarioDB = await Usuario.create(usuario)
        res.status(201).json({
            data: usuarioDB,
            mensagem: "usuario criado com sucesso"
        });
    };

    //endpoint do Usuario Atualizar Update
    static atualizarUsuario = async (req, res) => {
        const id = req.params.id

        //desestruturando o body, para nao precisar colocar req.body,nome, req.body.idade ...
        const { nome, idade, ativo, email } = req.body;
        const usuario = { nome, idade, ativo, email };

        await Usuario.updateOne({ _id: id }, usuario)
        res.status(200).json("usuario atualizadinho");
    };

    // deletando um usuario do banco 
    static deletarUsuario = async (req, res) => {
        //primeiro buscar o usuario, antes de deletar
        const id = req.params.id
        const usuarioDB = await Usuario.findOne({ _id: id })
        await Usuario.deleteOne({ _id: usuarioDB })
        // agora descobrindo a data e hora do delete
        let date = moment(new Date()).format('DD/MM/YYYY hh:mm:ss')

        res.status(200).json(`O usuario ${usuarioDB.nome} foi excluído com sucesso as:${date} !`)
    };
}
export default UsuarioController