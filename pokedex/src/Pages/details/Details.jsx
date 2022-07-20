import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../Routes/Coordinator";
// import { Header } from "../../Components/header/Header";
import { url_base } from "../../Constants/url_base";
import axios from "axios";

export const Details = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [types, setTypes] = useState([]);
  const [moves, setMoves] = useState([]);
  const [stats, setStats] = useState([]);

  const GetInfo = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/15`)

      .then((res) => {
        console.log(res.data);
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
    return <p key={item.type.name}> tipo = {item.type.name}</p>;
  });

  const listaMoves = moves.map((item) => {
    return <p key={item.move.name}>moves = {item.move.name}</p>;
  });
  const nomeStats = stats.map((item) => {
    return <p key={item.stat.name}>{item.stat.name}</p>
  })

  const listaValorStats = stats.map((item) => {
    return <p key={item.base_stat}>{item.base_stat}</p>;

  });

 return (
    <div>
      <h1>details</h1>
      <p>{details.id}</p>
      <p>{details.name}</p>
      <div>{listaTypes}</div>
      <div>{listaMoves}</div>
      <div>{nomeStats}</div>
      <div>{listaValorStats}</div>
      
      <button
        onClick={() => {
          goToPokedex(navigate);
        }}
      >
        pokedex
      </button>
      <button
        onClick={() => {
          goToHome(navigate);
        }}
      >
        Home
      </button>
    </div>
  );
};
