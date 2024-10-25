export async function get_pokemon (id){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        
        if (!response.ok) {  // Verifica si la respuesta es satisfactoria
            if (response.status === 404) {
                throw new Error(`Pokemon with ID ${id} not found (Error 404).`);
            } else {
                throw new Error(`Error: ${response.status}`);
            }
        }

        return await response.json();   // devuelve la respuesta en forma de objeto.
    } catch(error) {
        console.error(error)
        return null;
    }
}

export function parse_corporal_measures (measure){
    return (measure / 10)
}