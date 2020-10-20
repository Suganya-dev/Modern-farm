// console.log("Welcome to the main module")
import {createPlan} from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {addPlant} from "./field.js"
import {usePlants } from "./field.js"
import {plantSeeds} from "./tractor.js"
import {Catalog} from"./Catalog.js"
import {harvestPlants} from"./harvester.js"

const yearlyPlan = createPlan();
console.log("this is the yearly plan", yearlyPlan);

const asparagusseed = createAsparagus()
console.log (asparagusseed);
const food = harvestPlants("wheat")
console.log(food)


 const form= addPlant("asparagusseed")
 console.log(form)
  const foodie = Catalog("potato")
  console.log(foodie)



// const plants = usePlants();
// console.log (plants);
 const seed = plantSeeds("sunflower","potato","wheat")
 const pla = usePlants()
 console.log(pla);

 const cornCollection= [
  {
 plantname: "corn",
 height: "180",
 output: "6"
},
{
 plantname: "corn",
 height: "180",
 output: "6" 
} ]
addPlant("cornCollection")
const output = usePlants()
console.log(output);