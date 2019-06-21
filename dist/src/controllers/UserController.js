"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const typeorm_1 = require("typeorm");
class UserController {
    getAllUsers() {
        const users = typeorm_1.getRepository(User_1.User).find();
        return users;
    }
}
exports.UserController = UserController;
