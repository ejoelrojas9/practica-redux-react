export const BUY_POKEMON = 'BUY_POKEMON' //Exportamos las constastes
export const RETURN_POKEMON = 'RETURN_POKEMON'

export const buy_pokemon_action = (cant) => { //Acciones que vienen siendo funciones
    return { //para comprar pokemon
        type: BUY_POKEMON,
        payload: cant
    }
}

export const return_pokemon_action = (cant) => { //Acciones que vienen siendo funciones
    return { //para devolver pokemon
        type: RETURN_POKEMON,
        payload: cant
    }
}