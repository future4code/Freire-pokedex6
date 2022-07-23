import { Card } from "../../Components/card/Card";
import React from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import {Container,NotPoke,CardList} from "./styled"
import pikachu from '../../Assets/pikachu.gif'


export const Pokedex = () => {

    const {pokedex}= useContext(GlobalStateContext)
   


    const listPokedex = pokedex && pokedex.map((item) => {
        return <Card key={item} name={item}/>
    })

    return(
        
        <Container>
             {listPokedex.length > 0 ? <CardList>{listPokedex} </CardList> : <NotPoke><h1>você ainda não possui pokemons</h1> <img src={pikachu} alt="" /></NotPoke>}
        </Container>
    )

}
