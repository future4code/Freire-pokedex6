import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails, goToPokedex } from "../../Routes/Coordinator";
import axios from "axios";
import {Container } from './styled'

import { Card } from "../../Components/card/Card";

export const Home = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);
 

   const getPokemon = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((res)=>{
          console.log(res.data.results)
          setPokemon(res.data.results)
      })
      // .cath((err)=>{
      //     console.log(err.data)
      // })
   }


  useEffect(() => {
    getPokemon()
   
  }, []);

const listPoke = pokemon.map((item)=> {
      
    return <Card name={item.name}/>
})


  return (

    <Container>
        {listPoke}

    </Container>
  );
};


