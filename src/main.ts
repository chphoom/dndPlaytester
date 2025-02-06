import { calcCR } from "./services/challengeRatingService";
import { CornOoze } from "./monsters/cornOoze";
import { CornGremlin } from "./monsters";
// ROUND 1: CR Estimator

console.log("\nCR Estimator Example: ");
calcCR(new CornOoze("6d10", 12),true, 3);

// ROUND 2: Average CR Estimator
let totalCR = 0;
let iterations = 1000;

for (let i = 0; i < iterations; i++) {
    totalCR += calcCR(new CornOoze("6d10", 12), false, 3);
}

let averageCR = totalCR / iterations;
console.log("Average CR after 1000 runs: " + averageCR);

// let totalCR = 0;
// let iterations = 1000;

// for (let i = 0; i < iterations; i++) {
//     totalCR += calcCR(new CornGremlin, false, 0.25);
// }

// let averageCR = totalCR / iterations;
// console.log("Average CR after 1000 runs: " + averageCR);