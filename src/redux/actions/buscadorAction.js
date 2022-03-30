import axios from "axios"

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST' //Peticion
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE'


//Actions

export const fetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (Pokemon) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: Pokemon
    }
}

export const fethPokemonFailure = (error) => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}

//Estas tres acciones van envuelta e una gran accion que ira cambiando internamente 

const fetchPokemon = (valor) => { //Exportamos la función
    return (dispatch) = => { //Función que devuelve otra función que gracias a Thunk envia el dispatch
        dispatch(fetchPokemonRequest()); //Primera acción habilitando que se esta haciendo request
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`) //Se llama a axios.get Direción de la API en este caso la de Pokemon
            .then(response => {
                dispatch(fetchPokemonSuccess([response.data])); //Petición de encontrado
            })
            .catch(error => {
                dispatch(fethPokemonFailure('No se encontró el pokemon')); //catch es cuando ya hai un error
            });
    }

}

export default fetchPokemon;