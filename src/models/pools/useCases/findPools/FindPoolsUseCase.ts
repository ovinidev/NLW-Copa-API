import {
  IPoolData,
  IPoolRepository,
} from "../../../pools/interfaces/IPoolRepository";

export class FindPoolsUseCase {
  constructor(private poolRepository: IPoolRepository) {}

  async execute(): Promise<IPoolData> {
    return await this.poolRepository.findPools();
  }
}
