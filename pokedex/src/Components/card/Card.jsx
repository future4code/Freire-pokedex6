import React, { useEffect, useState } from "react";
import {
  ContainerCard,
  ContItens,
  Tipos,
  ContImg,
  Botoes,
  ImgPoke,
  Fundo,
  TitleType,
  Details,
} from "./styled";
import fundo from "../../Assets/fundo-pok.png";
import axios from "axios";
import { IconType } from "../card/Type";

export const Card = (props) => {
  const [order, setOrder] = useState([]);
  const [img, setImg] = useState();
  const [type, setType] = useState([]);

  const getPokemonId = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.name}/`)
      .then((res) => {
        setOrder(res.data.order);
        setImg(res.data.sprites.other.dream_world.front_default);
        setType(res.data.types);

        console.log(res.data.types);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  useEffect(() => {
    getPokemonId();
  }, []);
  console.log(type)

  const listTypes =
    type &&
    type.map((item) => {
      return (
        <TitleType backgroundColor={type[0]?.type?.name}>
          <IconType img={item.type.name} /> {item.type.name}{" "}
        </TitleType>
      );
    });

  return (
    <div>
      <ContainerCard backgroundColor={type[0]?.type?.name}>
        <ContItens>
          <div>
            <h4>#{order}</h4>
            <h3>{props.name.toUpperCase()}</h3>
            <Tipos>{listTypes}</Tipos>
          </div>

          <ContImg>
            <ImgPoke src={img} alt="" />
            <Fundo src={fundo} alt="" />
          </ContImg>
        </ContItens>

        <Botoes>
          <Details>Detalhes</Details>
          <button>button</button>
        </Botoes>
      </ContainerCard>
    </div>
  );
};

//  <button  onClick={props.pokedex ? removeFromPokedex : addToPokedex}>
//        {props.pokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
// </button>
// <button className="buttons" onClick={goToPokemonDetails}>Detalhar</button> 
