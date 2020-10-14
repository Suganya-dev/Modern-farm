import { createAsparagus } from "./seeds/asparagus.js"
import {createPotato} from "./seeds/potato.js";
import {createCorn} from "./seeds/corn.js";
import {createWheat} from "./seeds/wheat.js";
import {createsunflower} from "./seeds/sunflower.js";
import {createSoybean} from "./seeds/soybean.js";
import { addPlant } from "./field.js";

export const plantSeeds =(yearPlan) => {
    debugger
for(const rows of yearPlan) {
for(const plot of rows) {
    if(plot === "Asparagus"){
    addPlant(createAsparagus())
    }
    else if(plot === "Potato") {
    addplant (createPotato())
    }
    else if(plot === "corn") {
    addPlant(createCorn())
    }
    else if(plot === "wheat") {
    addplant(createWheat())
    }
    else if(plot === "soybean") {
    addplant(createSoybean())
    }
    else if(plot === "sunflower"){
    addplant(createsunflower())
    }
    else if(plot === "wheat"){
    addplant(createwheat())
    }
    }
}

}


