import Joi from "joi";
import bcrypt from "bcrypt";
export const UserSchemaValidation = Joi.object({
  username: Joi.string().alphanum().min(4).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid("user", "role").required(),
});

export interface Iusers {
  username: string;
  password: string;
  email: string;
  role: string;
}

export interface IloginUser extends Pick<Iusers, "username"> {
  accessToken: string;
  refreshToken: string;
}

class UserModel {
  users: Array<Iusers>;
  loginUser: Array<IloginUser>;
  constructor(user: Array<Iusers>) {
    this.users = user;
    this.loginUser = [];
  }
  async findUser(username: string, email: string) {
    return this.users.find(
      (user) => user.email === email || user.username === username
    );
  }
  async findUserCredential(username: string, password: string) {
    const user = this.users.find((user) => user.username === username);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return user;
      }
    }
    return undefined;
  }
  async createUser(user: Iusers) {
    return this.users.push(user);
  }
  async updateUser(username: string, email: string) {
    return this.users.filter(
      (user) => user.email === email || user.username === username
    );
  }
  async deleteUser(username: string, email: string) {
    return this.users.filter(
      (user) => user.email !== email || user.username !== username
    );
  }
}

export const userModel = new UserModel([]);
