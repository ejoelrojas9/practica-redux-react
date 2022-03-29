import React, {Component} from 'react';
import { connect } from 'react-redux'; //conectamos los componentes

class CantidadPokemon extends Component {
  render(){
    return(
      <React.Fragment>
        Unidades: {this.props.game_shop.pokemon}  
      </React.Fragment> //{this.props.game_shop.pokemon}  //acceso a los this.props
    )
  }
}

const mapStateToProps = (state) => {  //Constante que convierte el estado en props  (Accedemos al estado y devolvemos un objeto)
  return {
    game_shop: state.game_shop
  }
}

export default connect(mapStateToProps)(CantidadPokemon); //doble función (función currificada, funcion que evuelve otra función)