import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #9c9b9b;
  width: 95vw;
  height: 90vh;
  padding-left: 8px;

  h1 {
    position: absolute;
    color: white;
    font-size: 44px;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
    width: 97vw;
    height: 200vh;
  }

  h1 {
    position: absolute;
    color: white;
    font-size: 44px;
    margin-top: 5px;
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
  width: 95vw;
  height: 70vh;
  margin-top: 10vh;
  margin-left: 0;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
    flex-direction: column-reverse;
    width: 90vw;
    height: 178vh;
    justify-content: flex-end;
  }
`;

export const MovesBack = styled.div`
  display: flex;
  width: 200px;
  height: 524px;
  margin-left: 10px;
  margin-top: 100px;
  flex-direction: column;
`;
export const PokeProperties = styled.div`
  display: flex;
  color: #ffffff;
  width: 10px;
  flex-direction: column;
  z-index: 2;

  h2 {
    display: flex;
    margin: 0 10px 0 10px;
    font-size: 48px;
  }

  h3 {
    display: flex;
    font-size: 24px;
    margin: 0 50px 0 10px;
    z-index: 2;
  }

  p {
    width: 60px;
    z-index: 2;
  }

  div {
    display: flex;
    row-gap: 30px;
    width: 200px;
    justify-content: space-around;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 280px;
    flex-direction: column;
    margin-top: 2px;
    margin-left: 2px;

    h2 {
      display: flex;
      margin-top: 26px;
      font-size: 40px;
    }
  }
`;
export const PokeMovies = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 320px;
  height: 370px;
  border-radius: 8px;
  padding-left: 2px;
  margin-left: 15px;
  margin-top: 36px;
  z-index: 0;

  p p {
    margin-left: 2px;
    width: 160px;
    background-color: #9c9b9b6e;
    border: 1px solid black;
    border-radius: 16px;
    padding: 7px;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 280px;
    margin-top: 12px;
    flex-direction: column;
    ul {
      margin-top: 1px;
    }
  }
`;

export const PokeStats = styled.div`
  display: flex;
  padding-left: 2px;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  width: 320px;
  height: 600px;
  margin-left: 20px;
  margin-top: 34px;
  z-index: 2;

  li {
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    font-size: 16px;
    z-index: 1;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 280px;
    height: 450px;
    margin-left: 26px;
    margin-top: 8px;
    flex-direction: column;

    li {
      margin-top: 1px;
    }
  }
`;

export const PokeImage = styled.div`
  display: flex;
  justify-content: space-around;
  width: 280px;
  height: 665px;
  align-items: center;
  flex-direction: column;

  div {
    margin-left: 2%;
    display: flex;
    background-color: white;
    border-radius: 8px;
    width: 260px;
    height: 265px;
  }

  img {
    display: flex;
    width: 128px;
    height: 100px;
    margin-top: 80px;
    margin-left: 60px;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    grid-template-columns: 2fr;
    width: 88vw;
    flex-direction: row;
    align-items: center;

    img {
      width: 80px;
      height: 80px;
      margin-top: 10px;
      margin-left: 14px;
    }

    div {
      width: 100px;
      height: 100px;
    }
  }
`;

export const ImageBig = styled.div`
  display: flex;
  position: absolute;
  margin-left: 950px;
  margin-top: 40px;
  width: 250px;
  height: 150px;
  flex-direction: column-reverse;
  justify-content: flex-start;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    grid-template-columns: 1fr;
    width: 150px;
    height: 150px;
    align-items: stretch;
    margin-left: 100px;
    margin-top: 0px;
    justify-content: flex-end;
  }
`;

export const ImageBack = styled.div`
  display: flex;
`;
export const Pokebola = styled.div`
  position: absolute;
  margin-left: 500px;
  width: 750px;
  margin-top: 38px;
  img {
    width: 718px;
    z-index: -1;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    position: absolute;
    margin-left: 50px;
    width: 275px;
    margin-top: 38px;
    img {
      width: 220px;
      z-index: -1;
    }
  }
`;
