/* eslint-disable default-case */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #9c9b9b;
  width: 98vw;
  height: 80vh;
  padding-left: 8px;

  h1 {
    position: absolute;
    color: white;
    font-size: 56px;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    height: 70vh;
    grid-template-columns: 1fr;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }
`;

export const Properties = styled.div`
  display: flex;
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case "grass":
        return "#729F92";
      case "bug":
        return "#76A866";
      case "poison":
        return "#AD61AE";
      case "flying":
        return "#6892B0";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#0A6CBF";
      case "electric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "fighting":
        return "#CE4069";
      case "fire":
        return "#EAAB7D";
      case "ghost":
        return "#5269AC";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "normal":
        return "#BF9762";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#71C3FF";
    }
  }};
  border-radius: 38px;
  width: 95%;
  height: 70%;
  margin-top: 15vh;
  margin-left: 0;

  @media (max-width: 400px) {
    height: 71.6vh;
  }
  @media (max-width: 340px) {
    height: 74vh;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }
`;

export const MovesBack = styled.div`
  display: flex;
  width: 20%;
  height: 90%;
  margin-left: 3%;
  margin-top: 5%;
  flex-direction: column;
`;
export const PokeProperties = styled.div`
  display: flex;
  color: white;
  width: 70%;
  height: 28%;
  flex-direction: column;
  z-index: 2;

  h2 {
    font-size: 48px;
    margin-top: -19%;
    z-index: 2;
  }

  h3 {
    font-size: 24px;
    z-index: 2;
  }

  p {
    margin-bottom: 1%;
    width: 60px;
    z-index: 2;
  }

  div {
    display: flex;
    row-gap: 20%;
    width: 100%;
    justify-content: space-around;
  }
  @media (max-width: 400px) {
    height: 71.6vh;
  }
  @media (max-width: 340px) {
    height: 74vh;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }
`;
export const PokeMovies = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 61%;
  border-radius: 8px;
  padding-left: 2px;
  margin-left: 5%;
  margin-top: 20%;
  z-index: 0;

  p p {
    width: fit-content;
    background-color:  #9c9b9b6e;
    border: 2px solid black;
    border-radius: 8px;
    padding: 5px;
  }

  @media (max-width: 400px) {
    height: 71.6vh;
  }
  @media (max-width: 340px) {
    height: 74vh;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }
`;

export const PokeStats = styled.div`
  display: flex;
  padding-left: 2px;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  width: 24%;
  height: 90%;
  margin-left: 3%;
  margin-top: 3%;
  z-index: 2;

  li {
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    font-size: 16px;
    z-index: 1;
  }

  @media (max-width: 400px) {
    height: 71.6vh;
  }
  @media (max-width: 340px) {
    height: 74vh;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }
`;

export const PokeImage = styled.div`
  display: flex;
  justify-content: space-around;
  width: 24%;
  height: 100%;
  align-items: center;
  flex-direction: column;

  div {
    margin-left: 2%;
    display: flex;
    background-color: white;
    border-radius: 8px;
    width: 90%;
    height: 40%;
  }

  img {
    display: flex;
    width: 128px;
    height: 100px;
    margin-top: 88px;
    margin-left: 60px;
  }

  @media (max-width: 400px) {
    height: 71.6vh;
  }
  @media (max-width: 340px) {
    height: 74vh;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }
`;

export const ImageBig = styled.div`
  display: flex;
  position: absolute;
  margin-left: 71%;
  width: 250px;
  height: 150px;
  flex-direction: column-reverse;
  justify-content: flex-start;

  @media (max-width: 400px) {
    height: 71.6vh;
  }
  @media (max-width: 340px) {
    height: 74vh;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }
`;

export const ImageBack = styled.div`
  display: flex;

  @media (max-width: 400px) {
    height: 71.6vh;
  }
  @media (max-width: 340px) {
    height: 74vh;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    flex-direction: column;
    display: block;
    height: 70vh;
  }
`;
export const Pokebola = styled.div`
  position: absolute;
  margin-left: 42%;
  width: 51%;
  margin-top: 2%;
  img {
    width: 96%;
    z-index: -1;
  }

`;
