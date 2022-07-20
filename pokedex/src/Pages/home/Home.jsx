import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails, goToPokedex } from "../../Routes/Coordinator";
import axios from "axios";
import styled from "styled-components";
import fundo from "../../Assets/fundo-pok.png";

export const Home = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);
  const [order, setOrder] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [img, setImg] = useState();

  console.log(pokemon);
  console.log(img);

  //  const getPokemon = () => {
  //     axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20")
  //     .then((res)=>{
  //         console.log(res.data.results)
  //         setPokemon(res.data.results)
  //     })
  //     // .cath((err)=>{
  //     //     console.log(err.data)
  //     // })
  //  }

  const poke = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/5/`)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.sprites.other.dream_world.front_default);

        setPokemon(res.data.name);
        setAbilities(res.data.abilities);
        setOrder(res.data.order);
        setImg(res.data.sprites.other.dream_world.front_default);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  useEffect(() => {
    poke();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          goToPokedex(navigate);
        }}
      >
        pokedex
      </button>
      <button
        onClick={() => {
          goToDetails(navigate);
        }}
      >
        details</button>
     

    </div>
  );
};


