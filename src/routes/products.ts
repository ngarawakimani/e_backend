import {ProductController} from "../controllers/ProductController";


  const Products = (app) => {

      const productController = new ProductController();
  
      app.route('/products')
    
        .get( async (req, res) => {

          const data = await productController.getAllProducts();
          
          res.json(data);

        })
    
        .post(function (req, res) {
    
          res.send('Add a user')
    
        })
    
        .put(function (req, res) {
          
          res.send('Update the user')
        })
  }

export default Products;
