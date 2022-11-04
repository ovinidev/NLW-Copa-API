import { PoolRepository } from "../../repositories/PoolRepository";
import { FindPoolsController } from "./FindPoolsController";
import { FindPoolsUseCase } from "./FindPoolsUseCase";

export default () => {
  const poolRepository = new PoolRepository();

  const findPoolsUseCase = new FindPoolsUseCase(poolRepository);

  const findPoolsController = new FindPoolsController(findPoolsUseCase);

  return findPoolsController;
};
