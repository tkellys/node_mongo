//import { dbConnect } from "./db/dbConnect";
import express from 'express'
import 'dotenv/config'
import morgan from 'morgan';
import routes from './routes/index.js';

const app = express()
app.use(
    express.urlencoded({
        extended:true,
    })
);



// chamando as rotas como paramentro app
routes(app);

app.use(morgan('tiny'))

export default app;