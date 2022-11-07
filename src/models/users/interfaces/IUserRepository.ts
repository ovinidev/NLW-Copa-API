import { User } from "../entities/User";

export interface ICreateUserDTO {
  name: string;
  email: string;
}

export interface IFindUsers {
  users: User[];
  total: number;
}

export interface IUserRepository {
  create: ({ name, email }: ICreateUserDTO) => Promise<void>;
  findUsers: () => Promise<User[]>;
  findUsersCount: () => Promise<number>;
}
