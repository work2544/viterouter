import { use } from "react";
import { Iusers, userModel } from "../models/users.model";

class UserService {
  async createUser(user: Iusers) {
    const data = await userModel.findUser(user.username, user.email);
    if (!data) {
      await userModel.createUser(user);
    }
  }
  async getCredential(username: string, password: string) {
    try {
      const user = await userModel.findUserCredential(username, password);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  async getUser(user: Iusers) {
    try {
      return await userModel.findUser(user.username, user.email);
    } catch (error) {
      console.log(error);
    }
  }
}

export const userService = new UserService();
