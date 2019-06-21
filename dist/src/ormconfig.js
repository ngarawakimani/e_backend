"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const User_1 = require("./models/User");
const Product_1 = require("./models/Product");
exports.dbOptions = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "tshirtshop",
    "logging": true,
    "synchronize": false,
    "entities": [User_1.User, Product_1.Product],
};
