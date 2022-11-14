import ShortUniqueId from "short-unique-id";
import { z } from "zod";
import { CreatePoolUseCase } from "./CreatePoolUseCase";

export class CreatePoolController {
  constructor(private createPoolUseCase: CreatePoolUseCase) {}

  async handle(req: any, res: any) {
    const createPoolsBody = z.object({
      title: z.string(),
    });

    const { title } = createPoolsBody.parse(req.body);

    const generate = new ShortUniqueId({ length: 6 });
    const code = String(generate()).toUpperCase();

    try {
      await this.createPoolUseCase.execute(title, code);

      res.status(200).send({ code: code });
    } catch (err: any) {
      res.status(400).send(err.message);
    }
  }
}
