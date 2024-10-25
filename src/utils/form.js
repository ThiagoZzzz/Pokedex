import { render_pokemon } from "./cards"
import { render_error } from "./cards"
import { get_pokemon } from "./pokemon-functions"

const form = document.querySelector('#form')
const input = document.querySelector('#search')

function validate_input (input_value){
    if (input_value === ""){
        render_error("The id cannot be empty.")
        return
    }
    
    return true
}

async function validate_status(input_value) {
    const pokemon = await get_pokemon(input_value); 
    if (pokemon === null){
        render_error("The id does not exist.")
        return
    }

    return true
}

function searching(e){
    e.preventDefault()

    if (validate_input(input.value) && validate_status(input.value)){
        render_pokemon(input.value)
    }
}

export function init_form (){
    form.addEventListener('submit', searching)
}