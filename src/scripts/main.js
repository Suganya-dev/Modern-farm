// console.log("Welcome to the main module")
import {createPlan} from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"

const yearlyPlan = createPlan();
console.log(yearlyPlan);

const asparagusseed = createAsparagus()
console.log (asparagusseed);
