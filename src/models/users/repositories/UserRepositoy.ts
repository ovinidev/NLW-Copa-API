import { prisma } from "../../../services/prismaClient";
import { User } from "../entities/User";
import { ICreateUserDTO, IUserRepository } from "../interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  async create({ name, email }: ICreateUserDTO) {
    await prisma.user.create({
      data: {
        name,
        email,
      },
    });
  }

  async findUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  async findUsersCount(): Promise<number> {
    return await prisma.user.count();
  }
}
