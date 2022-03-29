import React, {Component} from 'react';

class ComprarPokemon extends Component{
  render() {
    return(
      <div>
        <button className="btn btn-dark btn-sm mb-2">Comprar Pokemon</button>
        <button className="btn btn-dark btn-sm">Regresar Pokemon</button>
      </div>
    )
  }
}

export default ComprarPokemon;