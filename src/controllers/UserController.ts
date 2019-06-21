import {User} from "../models/User";
import {getRepository} from "typeorm";

export class UserController{

    public getAllUsers():Promise<any> {

        const users = getRepository(User).find();

        return users;
    }

}
