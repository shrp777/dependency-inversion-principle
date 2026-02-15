import { A } from "./classes/A";
import { B } from "./classes/B";

const b: B = new B();
const a: A = new A(b); //injection de dépendance
//A dépend de B

a.caculateAndPrintResult(2, 5); //result = 7
