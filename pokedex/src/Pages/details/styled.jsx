import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #9c9b9b;
  width: 100vw;
  height: 100vh;
  padding-left: 8px;
  
  h1{
    position: absolute;
    color: white;
    font-size: 56px;
  }

  .Properties {
    display: flex;
    background-color: #729f92;
    border-radius: 38px;
    width: 95%;
    height: 70%;
    margin-top: 15vh;
    margin-left: 0;
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
    margin-top: 1%;
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
`;
export const PokeMovies = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 61%;
  border-radius: 8px;
  padding-left: 4px;
  margin-left: 5%;
  margin-top: 20%;
  z-index: 0;
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
    width: 50%;
    height: 50%;
    margin-top: 50px;
    margin-left: 36px;
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
`;

export const ImageBack = styled.div`
  display: flex;
`;
export const Pokebola = styled.div`
  position: absolute;
  margin-left: 35%;
  width: 100%;
  margin-top: 3%;
  img {
    width: 60%;
    height: 70%;
    z-index: -1;
  }
`;
