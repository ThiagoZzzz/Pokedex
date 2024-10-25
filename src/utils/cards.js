import { get_pokemon } from "./pokemon-functions"
import { parse_corporal_measures } from "./pokemon-functions"

const card_container = document.querySelector(".card_container")


function toggle_image(sprites){ 
    const pokemon_img = document.getElementById("pokemon-img")
    const button_img = document.getElementById("toggle-img")
    let showing_normal = true;

    button_img.addEventListener('click', () => {
    if (showing_normal) {
        pokemon_img.src = sprites.front_shiny;
    } else {
        pokemon_img.src = sprites.front_default;  
    }
    showing_normal = !showing_normal; 
});
}

function template_card(pokemon){
    const {name, types, sprites, height, weight, base_experience} = pokemon
    
    card_container.innerHTML = `
        <div class="card">
            <div class="card_row">
                <h1>${name}</h1>
            </div>
            <img id="pokemon-img" src="${sprites.front_default}" alt="">
            <div class="btn_row">
                <button id="toggle-img" class="img-btn">
                    <img src="./src/assets/icons/spark.svg" alt="">
                </button>
            </div>
            <div class="types_row">
                ${types.map(item => `<span class="${item.type.name}">${item.type.name}</span>`).join("")}
            </div>
            <p class="details">Exp: ${base_experience}</p>
            <p class="details">Height: ${parse_corporal_measures(height)} m</p>
            <p class="details">Weight: ${parse_corporal_measures(weight)} kg</p>
        </div>
    `;

    toggle_image(sprites)
    return
}
/* <div class="container_images"></div> */
/* <img src="${sprites.front_shiny}" alt=""></img> */

export function render_error(msg){
    return card_container.innerHTML = `
        <div class="error_card">
            <img src="./src/assets/icons/exclamation.svg" alt="">
            <p>${msg}</p>
        </div>
    `
}

export async function render_pokemon(id){
    const pokemon = await get_pokemon(id)
    template_card(pokemon)
}