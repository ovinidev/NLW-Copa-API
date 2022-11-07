import { UserRepository } from "../../repositories/UserRepositoy";
import { FindUsersController } from "./FindUsersController";
import { FindUsersUseCase } from "./FindUsersUseCase";

export default () => {
  const userRepository = new UserRepository();

  const findUsersUseCase = new FindUsersUseCase(userRepository);

  const findUsersController = new FindUsersController(findUsersUseCase);

  return findUsersController;
};
