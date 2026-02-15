import { A } from "./classes/A";
import { B } from "./classes/B";
import { B2 } from "./classes/B2";

const b: B = new B();
const a: A = new A(b); //injection de dépendance
//A dépend de IB et non de B

a.caculateAndPrintResult(2, 5); //result = 7

const b2: B2 = new B2();
const a2: A = new A(b2); // une instance de A accèpte tout type d'implémentation de IB

a2.caculateAndPrintResult(2, 5); //result = 10
