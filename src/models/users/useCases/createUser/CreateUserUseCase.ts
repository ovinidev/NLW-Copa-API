import {
  ICreateUserDTO,
  IUserRepository,
} from "../../interfaces/IUserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email }: ICreateUserDTO) {
    await this.userRepository.create({ name, email });
  }
}
