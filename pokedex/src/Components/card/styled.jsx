import styled from "styled-components";


const ContainerCard = styled.div`
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

const ContItens = styled.div`
display: flex;
justify-content: space-around;
`;
const ContImg = styled.div`
display: flex;
flex-direction: column-reverse;
`;

const Tipos = styled.div`
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
const ImgPoke = styled.img`
position: absolute;
padding-bottom: 10px;
width: 170px;
height: 150px;
`;

const Fundo = styled.img`
width: 150px;
height: 125px;
`;
const Botoes = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 10px;
`;