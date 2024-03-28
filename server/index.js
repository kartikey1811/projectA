import express from 'express';
import cors  from 'cors';
import bodyParser from 'body-parser';



import connection from './db.js';
import router from './routes/route.js';

const app = express();

app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.use('/', router);


const port = 8000;


connection();

app.listen(port,() => console.log(`sever is runing successfully ${port}`));