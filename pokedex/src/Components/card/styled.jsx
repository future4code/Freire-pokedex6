import styled from "styled-components";


export const ContainerCard = styled.div`
color: white;
margin: 30px auto;
border-radius: 10px;
display: flex;
flex-direction: column;
background-color: blue;
width: 280px;
height: 150px;

p {
  margin: 0;
}

h3 {
  margin: 0;
}
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
margin: 15px;

p {
  background-color: black;
  border-radius: 20px;
  width: 50px;
}
`;
export const ImgPoke = styled.img`
position: absolute;
padding-bottom: 10px;
width: 170px;
height: 150px;
`;

export const Fundo = styled.img`
width: 150px;
height: 125px;
`;
export const Botoes = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 10px;
`;