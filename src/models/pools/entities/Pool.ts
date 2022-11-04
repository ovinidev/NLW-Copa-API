import { IPool } from "../interfaces/IPool";

export class Pool implements IPool {
  id: string;
  title: string;
  code: string;
  createdAt: Date;
  ownerId: string | null;

  constructor() {
    this.id = "";
    this.title = "";
    this.code = "";
    this.createdAt = new Date();
    this.ownerId = "";
  }
}
