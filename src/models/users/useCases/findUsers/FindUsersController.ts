import { User } from "../../entities/User";
import { FindUsersUseCase } from "./FindUsersUseCase";

export class FindUsersController {
  constructor(private findUsersUseCase: FindUsersUseCase) {}

  async handle(req: any, res: any): Promise<User[]> {
    try {
      const users = await this.findUsersUseCase.execute();

      return res.status(200).send(users);
    } catch (err: any) {
      return res.status(400).send(err.many);
    }
  }
}
