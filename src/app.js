//import { dbConnect } from "./db/dbConnect";
import express from 'express'
import 'dotenv/config'
import morgan from 'morgan';

const app = express()
app.use(
    express.urlencoded({
        extended:true,
    })
);
app.use(express.json())

app.use(morgan('tiny'))

export default app;