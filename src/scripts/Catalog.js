export const Catalog = (foodArray) => {
let contentElement = document.querySelector(".container")
for(const food of foodArray){
    contentElement.innerHTML += 
    `
    <section class="plants">
    ${food.type}
    </section>
    `
}
}