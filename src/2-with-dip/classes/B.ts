import type { IB } from "../interfaces/IB";

export class B implements IB {
  calculate(a: number, b: number): number {
    return a + b;
  }
}
