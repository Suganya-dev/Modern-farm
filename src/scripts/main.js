// console.log("Welcome to the main module")
import {createPlan} from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {addPlant} from "./scripts/field.js"

const yearlyPlan = createPlan();
console.log(yearlyPlan);

const asparagusseed = createAsparagus()
console.log (asparagusseed);

const seedObj = {
    seed1: "corn",
    seed2: "potato",
    seed3: "asparagus",
    seed4: "wheat",
    seed5: "soybean",
    seed6: "sunflower"
}
addPlant(seedObj);

const plants = usePlants();
console.log(plants);

