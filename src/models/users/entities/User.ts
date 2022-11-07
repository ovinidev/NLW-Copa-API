import { IUser } from "../interfaces/IUser";

export class User implements IUser {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  createdAt: Date;

  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.avatarUrl = user.avatarUrl;
    this.createdAt = user.createdAt;
  }
}
