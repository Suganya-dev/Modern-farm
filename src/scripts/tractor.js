import { createAsparagus } from "./seeds/asparagus.js"
import {createPotato} from "./seeds/potato.js";
import {createCorn} from "./seeds/corn.js";
import {createWheat} from "./seeds/wheat.js";
import {createsunflower} from "./seeds/sunflower.js";
import {createSoybean} from "./seeds/soybean.js";
import { addPlant } from "./field.js";

export const plantSeeds =(yearPlan) => {
for(const row of yearPlan) {
for(const plot of row) {
    if(plot === "Asparagus"){
    addPlant(createAsparagus());
    }
    if(plot === "potato"){
    addplant (createPotato());
    }
    if(plot === "corn"){
    addPlant(createCorn());
    }
    if(plot === "wheat"){
    addplant(createWheat());
    }
    if(plot === "soybean"){
    addplant(createSoybean());
    }
    if(plot === "sunflower"){
    addplant(createsunflower());
    }
    if(plot === "wheat"){
    addplant(createwheat());
    }
    }
}

}

createAsparagus();
