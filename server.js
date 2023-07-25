//  Criando primeira aplicação e subindo servidor MONGO ATLAS E POSTMAN:
// acessar: https://expressjs.com/pt-br/starter/hello-world.html tem o passo a passo. 

import { Usuario } from './src/models/Usuario.js';
import moment from 'moment';
import app from './src/app.js';

const host = 'localhost'
const port = 5000

//endpoint inicial
app.get('/', (req, res) => { 
    res.send('Servidor rodando')
})


app.listen(port, () => {
    console.log(`Estou ouvindo na porta http://${host}:${port}`)
});

