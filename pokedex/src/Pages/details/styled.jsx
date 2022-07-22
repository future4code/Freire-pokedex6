import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #ababab;
  width: 100vw;
  height: 100vh;
  padding-left: 8px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  .ID {
    display: flex;
    position: absolute;
    font-size: 24px;
    
  }

  .Name {
    display: flex;
    position: absolute;
    font-size: 48px;
    
  }

  .Types{
    display: flex;
    position: absolute;
    margin-top: 8vw;
    width: 7vw;
    justify-content: space-between;
  }

  .Properties {
    display: flex;
    background-color: #729f92;
    border-radius: 38px;
    width: 94vw;
    height: 60vh;
    margin-top: 30vh;
    margin-left: 0;
  }
  .TypesContainer {
    display: flex;
    position: absolute;
    margin-left: 74vh;
    width: 6vw;
    justify-content: space-between;
    flex-direction: column;
}
  

  .Moves {
    display: flex;
    position: absolute;
    width: 20vw;
    height: 30vh;
    background-color: white;
    border-radius: 8px;
    flex-direction: column;
    padding-left: 8px;
    margin-left: 54vw;
    margin-top: 13%;
  }

  .Stats {
    display: flex;
    position: absolute;
    width: 22vw;
    height: 58vh;
    background-color: white;
    border-radius: 8px;
    flex-direction: column;
    padding-left: 8px;
    margin-left: 26vw;
    margin-top: 1vh;
  }

  .BaseStats {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 28%;
    align-items: flex-end;
    font-size: 12px;
    margin-top: 32%
  }
  .StatsTitle {
    font-size: 24px;
    margin-bottom: 10%;
  }

  .StatsNumber {
    display: flex;
    flex-direction: column;
    width: 36%;
    align-items: flex-end;
    font-size: 12px;
    
    
  }

  .Buttons {
    display: flex;
    position: absolute;
    align-items: flex-start;
  }

  .Image{
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-left: 2%;
    margin-top: 2%;
    height: 56%;
    justify-content: space-between;
    

  }

  .Image1{
    display: flex;
    width: 20vw;
    height: 20vh;
    background: white;
    border-radius: 8px;
  }

  .Image2{
    display: flex;
    width: 20vw;
    height: 20vh;
    background: white;
    border-radius: 8px;
  }
`;
