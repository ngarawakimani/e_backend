import "reflect-metadata";

import {ConnectionOptions} from "typeorm";
import {User} from "./models/User";
import {Product} from "./models/Product";
 
export const dbOptions: ConnectionOptions = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "tshirtshop",
    "logging": true,
    "synchronize": false,
    "entities": [User,Product],
}