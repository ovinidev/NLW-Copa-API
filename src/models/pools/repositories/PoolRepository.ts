import { prisma } from "../../../services/prismaClient";
import { IPoolData, IPoolRepository } from "../interfaces/IPoolRepository";

export class PoolRepository implements IPoolRepository {
  async create(title: string, code: string): Promise<void> {
    await prisma.pool.create({
      data: {
        title,
        code,
      },
    });
  }

  async findPools(): Promise<IPoolData> {
    const pool = await prisma.pool.findMany();
    const total = await prisma.pool.count();

    return { pool, total };
  }
}
