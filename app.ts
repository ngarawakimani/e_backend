import * as express from 'express';
import * as path from'path';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from  "body-parser";
import * as logger from 'morgan';
import {createConnection} from "typeorm";
import * as appConfig from "./src/ormconfig";

import Users from './src/routes/users';
import Products from './src/routes/products';

var app = express();
app.use(bodyParser.json());

//routes

app.get('/',(req,res,next)=>{
    res.send("home page");
})

createConnection(appConfig.dbOptions).then(async connection => {
    console.log("Connected to DB");
 
}).catch(error => console.log("TypeORM connection error: ", error));

//Users(app);
Products(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
