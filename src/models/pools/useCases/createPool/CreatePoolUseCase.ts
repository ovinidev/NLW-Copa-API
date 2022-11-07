import { IPoolRepository } from "../../../pools/interfaces/IPoolRepository";

export class CreatePoolUseCase {
  constructor(private poolRepository: IPoolRepository) {}

  async execute(title: string, code: string): Promise<void> {
    await this.poolRepository.create(title, code);
  }
}
