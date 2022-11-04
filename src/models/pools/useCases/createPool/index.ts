import { PoolRepository } from "../../repositories/PoolRepository";
import { CreatePoolController } from "./CreatePoolController";
import { CreatePoolUseCase } from "./CreatePoolUseCase";

export default () => {
  const poolRepository = new PoolRepository();

  const createPoolUseCase = new CreatePoolUseCase(poolRepository);

  const createPollController = new CreatePoolController(createPoolUseCase);

  return createPollController;
};
