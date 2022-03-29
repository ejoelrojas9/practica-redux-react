const BuscadorPokemon = () => { //Componente de función
  return(  //Dentro de la función regresamos algo que va ser un div con una clase que como hio va tener una label
    <div className="form-group">  {/* div.form-group>label.text-white+input.form-control#buscar_pokemon+button.btn.btn-primary.mt-3 */}
      <label htmlFor="buscar_pokemon" className="text-white">Buscar Pokemons</label>
      <input type="text" className="form-control" id="buscar_pokemon" value="Pikachu" />
      <button className="btn btn-primary mt-3">Enviar</button>
    </div>
  )

}

export default BuscadorPokemon;