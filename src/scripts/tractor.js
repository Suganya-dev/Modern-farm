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
    addPlant(createAsparagus());
    }
    elseif(plot === "Potato") {
    addplant (createPotato());
    }
    elseif(plot === "corn") {
    addPlant(createCorn());
    }
    elseif(plot === "wheat") {
    addplant(createWheat());
    };
    elseif(plot === "soybean") {
    addplant(createSoybean());
    }
    elseif(plot === "sunflower"){
    addplant(createsunflower());
    }
    elseif(plot === "wheat"){
    addplant(createwheat());
    }
    }
}

}


