import mongoose from "mongoose";
import 'dotenv/config'

//Criando constantes pra acessar o login do banco de dados
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;


//conectando no banco mongo atlas
/* Mongo ATLAS */
 const dbConnect = mongoose
.connect (`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.aybtzfg.mongodb.net/dc_fs12?retryWrites=true&w=majority`)

/*MONGO LOGAL PELO APP BAIXADO NO PC*/
// mongoose.connect(`mongodb://${DB_PASS_COMPASS}:${DB_PASS_COMPASS}@localhost:27017/?authMechanism=DEFAULT`)
    .then(() => {
        console.log('BD CONECTADO');
})
.catch (error => {
    console.log('erro ao conectar', error);
})

export default dbConnect 