import { IFindUsers, IUserRepository } from "../../interfaces/IUserRepository";

export class FindUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<IFindUsers> {
    const users = await this.userRepository.findUsers();
    const total = await this.userRepository.findUsersCount();

    return {
      users,
      total,
    };
  }
}
