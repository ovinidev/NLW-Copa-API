import { FindPoolsUseCase } from "./FindPoolsUseCase";

export class FindPoolsController {
  constructor(private findPoolsUseCase: FindPoolsUseCase) {}

  async handle(req: any, res: any) {
    try {
      const pools = await this.findPoolsUseCase.execute();

      res.status(200).send(pools);
    } catch (err: any) {
      res.status(400).send(err.message);
    }
  }
}
