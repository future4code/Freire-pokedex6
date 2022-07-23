
import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { goToHome, goToPokedex } from "../../Routes/Coordinator";
// import { Header } from "../../Components/header/Header";
// import { url_base } from "../../Constants/url_base";
import axios from "axios";
import { Container } from "./styled";

export const Details = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [types, setTypes] = useState([]);
  const [moves, setMoves] = useState([]);
  const [stats, setStats] = useState([]);

  const pathParams = useParams();
  console.log(pathParams)
  const poke= pathParams.poke;

  

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
    return <p key={item.type.name}>{item.type.name}</p>;
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

  return (
    <Container>
      <div className="Properties">
      <container className="TypesContainer"> 
      <p className="ID">#{details.id}</p>
      <p className="Name">{details.name}</p>
      <p className="Types">{listaTypes}</p>
      </container>
      <div className="Moves">
        <p>Moves</p>
        <p>{listaMoves}</p>
        </div>
        <div className="Stats">
        <p className="StatsTitle">Base Stats</p>
       <p className="BaseStats"> {nomeStats}</p>
       <p className="StatsNumber">{listaValorStats}</p>
       </div>
      <container className="Image" >
        <div >
        <img className="Image1"
          src={details && details?.sprites?.front_default}
          alt={details.name}
        />
        </div>
        <div >
        <img className="Image2"
          src={details && details?.sprites?.back_default}
          alt={details.name}
        />
        </div>
      </container>
      </div>
      <div className="Buttons">
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
    </Container>
  );
};
