import type { IB } from "../interfaces/IB";

export class A {
  private b: IB;

  constructor(b: IB) {
    //la classe A dépend d'une interface IB
    this.b = b;
  }

  calculateAndPrintResult(a: number, b: number) {
    const result = this.b.calculate(a, b);
    console.log(`result = ${result}`);
  }
}
