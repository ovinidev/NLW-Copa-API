import { IPoolData, IPoolRepository } from "../../interfaces/IPoolRepository";

export class FindPoolsUseCase {
  constructor(private poolRepository: IPoolRepository) {}

  async execute(): Promise<IPoolData> {
    return await this.poolRepository.findPools();
  }
}
