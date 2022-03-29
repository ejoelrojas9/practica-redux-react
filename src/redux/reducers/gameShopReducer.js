import { BUY_POKEMON } from "../actions/gameShopAction"
import { RETURN_POKEMON } from "../actions/gameShopAction"

const defaul_game_shop = { //Inicialización del estado
    pokemon: 30
}

const game_shop = (state = defaul_game_shop, action) => {
        switch (action.type) {
            case BUY_POKEMON:
                { //Nombre de la acción
                    return {
                        ...state,
                        pokemon: state.pokemon - action.payload //Resta del producto comprado en el almacen
                    }
                }
            case RETURN_POKEMON:
                { //Nombre de la acción
                    return {
                        ...state,
                        pokemon: state.pokemon + action.payload //Devuelve el producto comprado en el almacen
                    }
                }
            default:
                return state;
        }
    } //Creación del reducer


export default game_shop; //Exportado de constante