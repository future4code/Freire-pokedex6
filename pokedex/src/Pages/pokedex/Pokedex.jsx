import React, { useContext } from "react";
import {useNavigate} from "react-router-dom"
import { goToDetails,goToHome} from "../../Routes/Coordinator";
//import GlobalStateContext from '../../global/GlobalStateContext'
//import Card from '../../Components/card/Card'

export const Pokedex = () => {
    const navigate = useNavigate()

    // const {pokedex} = useContext(GlobalStateContext)


return(
    
    <div>

        <h1>pokedex</h1>
    
        <button onClick={()=>{goToDetails(navigate)}}>details</button>
        <button onClick={()=>{goToHome(navigate)}}>home</button>
        {/* Se existe a pokedex e terminou de pegar ela(pokedex &&), vamos fazer um map nela e trazer os dados do popkémom */}
        <pokedexContainer> 
        {/* O parâmetro isPokedex serve para quando ele estiver dentro da pokédex, o texto mudar e a função de adiconar trocar para remover
            {pokedex && pokedex.map(() => {
                return <Card key={poke.name} isPokedex pokemon={poke}/>  //Estamos passando por prop para dentro do PokemonCard as infomações dos pokémons(pokemon={poke})
            })} */}
        </pokedexContainer>
    </div>
)

}