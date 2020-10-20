import { createAsparagus } from "./seeds/asparagus.js"
import {createPotato} from "./seeds/potato.js";
import {createCorn} from "./seeds/corn.js";
import {createWheat} from "./seeds/wheat.js";
import {createsunflower} from "./seeds/sunflower.js";
import {createSoybean} from "./seeds/soybean.js";
import { addPlant } from "./field.js";

export const plantSeeds =(yearPlan) => {
    
for(const rows of yearPlan) {
for(const plot of rows) {
    if(plot === "Asparagus"){
        addPlant(createAsparagus())
    }
    else if(plot === "Potato") {
        addPlant (createPotato())
    }
    else if(plot === "corn") {
        addPlant(createCorn())
    }
    else if(plot === "wheat") {
        addPlant(createWheat())
    }
    else if(plot === "soybean") {
        addPlant(createSoybean())
    }
    else if(plot === "sunflower"){
        addPlant(createsunflower())
    }
    else if(plot === "wheat"){
        addPlant(createwheat())
    }
    }
}

}


