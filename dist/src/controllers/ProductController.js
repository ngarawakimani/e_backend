"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("../models/Product");
const typeorm_1 = require("typeorm");
class ProductController {
    getAllProducts() {
        const products = typeorm_1.getRepository(Product_1.Product).find();
        return products;
    }
}
exports.ProductController = ProductController;
