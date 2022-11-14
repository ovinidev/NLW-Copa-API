import {
  ICreateUserDTO,
  IUserRepository,
} from "../../interfaces/IUserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email }: ICreateUserDTO) {
    const user = await this.userRepository.findUsers();

    const userAlreadyExists = user.find((user) => {
      return user.email === email;
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    await this.userRepository.create({ name, email });
  }
}
