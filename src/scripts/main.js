// console.log("Welcome to the main module")
import {createPlan} from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {addPlant} from "/scripts/field.js"
import {usePlants } from "/scripts/field.js"

const yearlyPlan = createPlan();
console.log(yearlyPlan);

const asparagusseed = createAsparagus()
console.log (asparagusseed);


 const pot =addPlant("potato")
 console.log(pot);


const plants = usePlants();
console.log (plants);

