import React from 'react';
import { useSelector } from 'react-redux';

const CantidadPokemonHook = () => {  //función anomima

  const game_shop = useSelector((state) => state.game_shop); //Función anonima para acceder al estado
  //const game_shop = useSelector((state) => state.game_shop.pokemon);  Opcional con la configuración comentada
    return (
    <React.Fragment>
      Unidades: {game_shop.pokemon}
      {/* Unidades: {game_shop.} */}
    </React.Fragment> 
  );
}

export default CantidadPokemonHook;