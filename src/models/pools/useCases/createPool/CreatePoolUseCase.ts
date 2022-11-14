import { IPoolRepository } from "../../../pools/interfaces/IPoolRepository";

export class CreatePoolUseCase {
  constructor(private poolRepository: IPoolRepository) {}

  async execute(title: string, code: string): Promise<void> {
    const { pool } = await this.poolRepository.findPools();

    const poolAlreadyExists = pool.find((pool) => {
      return pool.code === code;
    });

    if (poolAlreadyExists) {
      throw new Error("Pool already exists!");
    }

    await this.poolRepository.create(title, code);
  }
}
