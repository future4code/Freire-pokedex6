import React, { useContext, useEffect, useState } from "react";
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
  BotaoAd,
  BotaoDel,
} from "./styled";
import fundo from "../../Assets/fundo-pok.png";
import axios from "axios";
import { IconType } from "../card/Type";
import { goToDetails } from "../../Routes/Coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { url_base } from "../../Constants/url_base";
import Swal from "sweetalert2";

export const Card = (props) => {
  const navigate = useNavigate();
  let location = useLocation();
  const [order, setOrder] = useState([]);
  const [img, setImg] = useState();
  const [type, setType] = useState([]);
  const { pokedex, setPokedex, setName } = useContext(GlobalStateContext);
  const [pokeAnimated, setAnimated] = useState([]);

  const getPokemonId = () => {
    axios
      .get(`${url_base}${props.name}/`)
      .then((res) => {
        setOrder(res.data.order);
        setImg(res.data.sprites.other.dream_world.front_default);
        setType(res.data.types);
        setAnimated(
          res?.data?.sprites?.versions["generation-v"]["black-white"]?.animated
            ?.front_default
        );
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    getPokemonId();
  }, []);

  const listTypes =
    type &&
    type.map((item) => {
      return (
        <TitleType backgroundColor={item.type.name}>
          <IconType img={item.type.name} /> {item.type.name}{" "}
        </TitleType>
      );
    });


    

  const removerPokemon = (pokeName) => {
    let remove = pokedex.filter((poke) => {
      return pokeName !== poke;
    });
    setPokedex(remove);
  };


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
            <ImgPoke src={img} alt="immagem pokemon" />
            <Fundo src={fundo} alt="" />
          </ContImg>
        </ContItens>

        <Botoes>
          <Details
            onClick={() => {
              goToDetails(navigate(`details/${props.name}`));
            }}
          >
            Detalhes
          </Details>

          {location.pathname == "/" ? (
            <BotaoAd
              onClick={() => {
                Swal.fire({
                  title: "Gotcha!",
                  text: "O Pokémon foi adicionado a sua Pokédex",
                  width: 600,
                  padding: "3em",
                  color: "#08090a",
                  background: "#fff url(/images/trees.png)",
                  showConfirmButton: false,
                  timer: 1500,

                  backdrop: `
                  #050515ec
                  url(${pokeAnimated})
                  top center
                  no-repeat
                  
                  
                  
                  
                `,
                });
                setPokedex([...pokedex, props.name]);
              }}
            >
              Capturar
            </BotaoAd>
          ) : (
            <BotaoDel
              onClick={() => {
                Swal.fire({
                  title: `${props.name}`,
                  text: "Deletado com sucesso",
                  imageUrl: `${img}`,
                  imageWidth: 400,
                  imageHeight: 200,
                  imageAlt: "Custom image",
                });
                removerPokemon(props.name);
              }}
            >
              Deletar
            </BotaoDel>
          )}
        </Botoes>
      </ContainerCard>
    </div>
  );
};
