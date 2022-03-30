import { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/buscadorAction";


const BuscadorPokemon = () => { //Componente de función
    const dispatch = useDispatch();   //Invocación del dispatch
    const [pokemon_name, set_pokemon_name] = useState('mewtwo'); //Estado para los nombres del pokemon

  return(  //Dentro de la función regresamos algo que va ser un div con una clase que como hio va tener una label
    <div className="form-group">  {/* div.form-group>label.text-white+input.form-control#buscar_pokemon+button.btn.btn-primary.mt-3 */}
      <label htmlFor="buscar_pokemon" className="text-white">Buscar Pokemons</label>
      <input type="text" className="form-control" id="buscar_pokemon" 
      value={pokemon_name} 
      onChange={
        (event) => {
          set_pokemon_name(event.target.value);  {/*Con esto se esta cambiando el nombre del pokemon dinamicamente */}
        }
      }
      />  {/* Se cambia el valor por el nombre */}
      
      <button className="btn btn-primary mt-3" onClick={
        ()=> {
          dispatch(fetchPokemon(pokemon_name))
        }
      }>Enviar</button>
    </div>
  )

}

export default BuscadorPokemon;