import { Pool } from "../entities/Pool";

export interface IPoolData {
  pool: Pool[];
  total: number;
}

export interface IPoolRepository {
  create: (title: string, code: string) => Promise<void>;
  findPools: () => Promise<IPoolData>;
}
