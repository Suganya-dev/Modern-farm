// console.log("Welcome to the main module")
import {createPlan} from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {addPlant} from "./field.js"
import {usePlants } from "./field.js"
import {plantSeeds} from "./tractor.js"

const yearlyPlan = createPlan();
console.log("this is the yearly plan", yearlyPlan);

const asparagusseed = createAsparagus()
console.log (asparagusseed);


  addPlant("asparagusseed")



const plants = usePlants();
console.log (plants);
 const seed = plantSeeds(yearlyPlan)
 console.log(seed);

