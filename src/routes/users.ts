import {UserController} from "../controllers/UserController";


  const Users = (app) => {

      const userController = new UserController();
  
      app.route('/users')
    
        .get( async (req, res) => {

          const data = await userController.getAllUsers();
          
          res.json(data);

        })
    
        .post(function (req, res) {
    
          res.send('Add a user')
    
        })
    
        .put(function (req, res) {
          
          res.send('Update the user')
        })
  }

export default Users;
