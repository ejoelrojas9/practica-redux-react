

const ResultadoPokemon = () => {
  return(
  <div> 
    {/* div>h3.text-white{Resultado: }+div.text-warning{Buscador... }+.text-success>img+span{pikachu} */}
    <h3 className="text-white">Resultado: </h3>
    <div className="text-warning">Buscando... </div>
    <div className="text-success">
      <img src="" alt="" />
      <span>pikachu</span>
      </div>
      <span className="text-danger">Error</span>
  </div>
  )
}

export default ResultadoPokemon;