//  Criando primeira aplicação e subindo servidor MONGO ATLAS E POSTMAN:
// acessar: https://expressjs.com/pt-br/starter/hello-world.html tem o passo a passo. 

import { Usuario } from './src/models/Usuario.js';

import app from './src/app.js';
import './src/db/dbConnect.js';

const host = 'localhost'
const port = 5000



app.listen(port, () => {
    console.log(`Estou ouvindo na porta http://${host}:${port}`)
});

