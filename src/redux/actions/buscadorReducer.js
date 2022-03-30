//En el reducer se organizan las accion FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE

import { FETCH_POKEMON_FAILURE, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS } from "./buscadorAction"

const initialState = { //Inicailizamos el estado
    loading: false,
    pokemon: [], //El objeto que va regresa
    error: ''
}

const buscador = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_REQUEST: //Primer caso, petición de busqueda
            return {
                ...state,
                loading: true //Solo cambiar el estado a true
            }

        case FETCH_POKEMON_SUCCESS: //Segundo caso, petición de encontrado
            return {
                loading: false, //Pasa a falso porque ya se cargo
                pokemon: action.payload,
                error: ''
            }
        case FETCH_POKEMON_FAILURE: //Tercer caso, cuando falla debe pasar algo
            return {
                loading: false, //Falso porque ya se tiene una respuesta y si fallo ya tenemos algo
                pokemon: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default buscador;