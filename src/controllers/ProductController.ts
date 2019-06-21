import {Product} from "../models/Product";
import {getRepository} from "typeorm";

export class ProductController{

    public getAllProducts():Promise<any> {

        const products = getRepository(Product).find();

        return products;
    }

}