let fieldfarm = []
export const addPlant =(seedObj) => {
    if(Array.isArray(seedObj) === true){
        fieldfarm.push(element);
    }
    else{
        fieldfarm.push(seedObj);
    }
   
}
export const usePlants =() => {
 return fieldfarm .slice()
 
};