import styled from "styled-components";

export const ImgLogo = styled.img`
  max-width: 200px;
  width: 100%;
  padding: 10px ;
  text-align: center;
  margin: 0 auto;
  display: flex;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
   width: 150px;

 }
  
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: #f8f8fb;

  .b {
    width: 280px;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;

    .b{
      width: 0px;
    }
  }
`;

export const TodosPok = styled.button`
  margin-left: 10px;
  align-items: center;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid black;
  font-size: 18px;
`;
export const Pokedex = styled.button`
  margin-right: 30px;
  border: none;
  background-color: #33a4f5;
  color: white;
  border-radius: 5px;
  width: 90px;
  padding: 10px 10px;
  margin-left: 290px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin: 0 auto 5px;
  }
`;
export const Deletar = styled.button`
  margin-right: 30px;
  border: none;
  background-color: #ff6262;
  color: white;
  border-radius: 5px;
  width: 150px;
  padding: 5px 5px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin: 0 auto 5px;
  }
`;
