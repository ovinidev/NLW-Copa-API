import { z } from "zod";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: any, res: any) {
    const createUsersBody = z.object({
      name: z.string(),
      email: z.string(),
    });

    const { name, email } = createUsersBody.parse(req.body);

    try {
      await this.createUserUseCase.execute({ name, email });

      res.status(201).send({ message: "User created" });
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }
}
