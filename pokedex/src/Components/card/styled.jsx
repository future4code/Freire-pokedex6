import styled from "styled-components";

export const ContainerCard = styled.div`
  color: white;
  margin: 30px auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
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

  width: 280px;
  height: 150px;

  h4 {
    margin: 0 10px;
  }

  h3 {
    margin: 0;
    text-align: center;
  }
`;

export const Details = styled.button`
    color: white;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid;
`

export const TypeImage = styled.img`
  
  width: 8px;
  height: 12px;
`;
export const TitleType = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 2px 12px 5px 2px;
  gap: 3px;

  border-radius: 10px;
  width: 50px;
  text-align: center;
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case "grass":
        return "#70B873";
      case "bug":
        return "#316520";
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
        return "#F44900";
      case "ghost":
        return "#5269AC";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "normal":
        return "#8A8A8A";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#0A6CBF";
    }
  }};
`;

export const ContItens = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const ContImg = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const Tipos = styled.div`
  gap: 3px;

  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
export const ImgPoke = styled.img`
  position: absolute;
  padding-bottom: 10px;
  width: 170px;
  height: 140px;
`;

export const Fundo = styled.img`
  width: 140px;
  height: 120px;
`;
export const Botoes = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  
`;
