"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const indexPage = () => {
    var router = express.Router();
    /* GET home page. */
    router.get('/', function (req, res, next) {
        res.send('index');
    });
    return router;
};
exports.default = indexPage;
