"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductController_1 = require("../controllers/ProductController");
const Products = (app) => {
    const productController = new ProductController_1.ProductController();
    app.route('/products')
        .get((req, res) => __awaiter(this, void 0, void 0, function* () {
        const data = yield productController.getAllProducts();
        res.json(data);
    }))
        .post(function (req, res) {
        res.send('Add a user');
    })
        .put(function (req, res) {
        res.send('Update the user');
    });
};
exports.default = Products;
