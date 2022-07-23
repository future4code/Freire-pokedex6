import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-around;

margin: 20px;
width: 99vw;
height: 86vh;
margin: 0px auto;
background-color: #5E5E5E;



`
export const CardList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap:20px;

`
export const NotPoke = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 100vw;
    height: 60vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    margin:  auto ;
    
    img{
        width: 400px;
        height: 300px;

    }
   
`