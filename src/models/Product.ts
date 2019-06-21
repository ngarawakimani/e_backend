import {ViewEntity, ViewColumn} from "typeorm";

@ViewEntity({ 
    expression: 'SELECT `product_id`, `name`, `description`, `price`, `discounted_price`, `image`, `image_2`, `thumbnail`, `display` FROM `product`'
})
export class Product {

    @ViewColumn()
    product_id;

    @ViewColumn()
    name;
    
    @ViewColumn()
    description;
    
    @ViewColumn()
    price
    
    @ViewColumn()
    discounted_price
    
    @ViewColumn()
    image
    
    @ViewColumn()
    image_2
    
    @ViewColumn()
    thumbnail
    
    @ViewColumn()
    display

}
