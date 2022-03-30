import { useSelector } from "react-redux";


const ResultadoPokemon = () => {
const buscador= useSelector((state) => state.buscador); //Llamar al estado actual, dentro de los parentesis la función anonima que esta pasando el state para devolver el state.buscador

  return(
  <div> 
    {/* div>h3.text-white{Resultado: }+div.text-warning{Buscador... }+.text-success>img+span{pikachu} */}
    <h3 className="text-white">Resultado: </h3>
    {buscador.loading && <div className="text-warning">Buscando... </div>}
    {
        buscador.pokemon.length >= 1 && 
        <div className="text-success">
            <img src={buscador.pokemon[0].sprites.front_default} alt="Pokemon" />
            <span>{buscador.pokemon[0].name}</span>
        </div>
    }
      {buscador.error !== '' && <span className="text-danger">{buscador.error}</span>}
  </div>
  )
}

export default ResultadoPokemon;