import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { goToHome, goToPokedex } from "../../Routes/Coordinator";

import axios from "axios";
import {
  Container,
  PokeImage,
  PokeMovies,
  PokeProperties,
  PokeStats,
  ImageBig,
  MovesBack,
  Pokebola,
  Properties
} from "./styled";
import { IconType } from "../../Components/card/Type";
import { TitleType } from "../../Components/card/styled";
import Image  from "../../Assets/fundo-pok.png"

export const Details = () => {
  // const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [types, setTypes] = useState([]);
  const [moves, setMoves] = useState([]);
  const [stats, setStats] = useState([]);

  const pathParams = useParams();
  const poke = pathParams.poke;

  const GetInfo = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poke}/`)

      .then((res) => {
        // console.log('ACERTOU')
        // console.log(res.data);
        // console.log(res.data.types)
        // console.log(res.data.moves.slice(0,5))
        // console.log(res.data.stats);
        setDetails(res.data);
        setTypes(res.data.types);
        setMoves(res.data.moves.slice(0, 5));
        setStats(res.data.stats);
      })

      .catch((err) => {
        console.log(err.response.data);
      });
  };
  useEffect(() => {
    GetInfo();
  }, []);

  const listaTypes = types.map((item) => {
    return (
      <TitleType backgroundColor={item.type.name}>
        <IconType img={item.type.name}></IconType>
        {item.type.name}
      </TitleType>
    );
  });

  const listaMoves = moves.map((item) => {
    return <p key={item.move.name}>{item.move.name}</p>;
  });
  const nomeStats = stats.map((item) => {
    return <p key={item.stat.name}>{item.stat.name}</p>;
  });

  const listaValorStats = stats.map((item) => {
    return <p key={item.base_stat}>{item.base_stat}</p>;
  });
  console.log(types)

  return (
    <Container>
      <h1>Detalhes</h1>
      <Properties backgroundColor={types[0]?.type?.name}> 
       <PokeImage>
          <div>
            <img
              src={
                details &&
                details?.sprites?.versions["generation-v"]["black-white"]
                  ?.animated?.front_default
              }
              alt={details.name}
            />
          </div>
          <div>
            <img
              src={
                details &&
                details?.sprites?.versions["generation-v"]["black-white"]
                  ?.animated?.back_default
              }
              alt={details.name}
            />
          </div>
        </PokeImage>
        <PokeStats>
          <h2> Base Stats</h2>
          <li>
            <p> {nomeStats}</p>
            <p>{listaValorStats}</p>
          </li>
        </PokeStats>
        <Pokebola>
          <img src={Image} alt="Pokebola"></img>
          </Pokebola>
        <MovesBack>
          
          <PokeProperties>
            <h3>#{details.id}</h3>
            <h2>{details && details?.name?.toUpperCase()}</h2>
            <div>
            {listaTypes}
            </div>
          </PokeProperties>
          <PokeMovies>
           <h2>Moves:</h2>
            <ul>
            <p>{listaMoves}</p>
            </ul>
          </PokeMovies>
        </MovesBack>
        <ImageBig>
          <img
            src={details && details?.sprites?.other?.dream_world.front_default}
            alt={details.name}
          ></img>
        </ImageBig>
      </Properties>
    </Container>
  );
};
