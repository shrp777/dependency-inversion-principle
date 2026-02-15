import type { IB } from "../interfaces/IB";

export class B2 implements IB {
  calculate(a: number, b: number): number {
    return a * b;
  }
}
