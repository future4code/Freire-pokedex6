import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/logo.png.png"
import { goToPokedex, goToHome, goBack} from "../../Routes/Coordinator";
import styled from "styled-components"

const HeaderContainer = styled.div`
border: 1px solid red;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    background-color: Blue;
   
`
const ImgLogo = styled.img`
  max-width: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* flex-direction: row; */
  align-items: center;

  /* .imagem {
    
     display: flex;
     align-items: center;
     
 
    } */
    
`
const ContainerButton = styled.div`
     display: flex;
     align-items: center;
     margin-right: 35px;
        
`
const Button = styled.button`
     align-items: center;
     box-shadow: 5px 5px 5px #eeeeee;
     width: 100px; 
     margin-left: 10px;
     margin-right: 30px;
     height: 40px;
     padding: 0px 15px;
     border-radius: 16px;    
     background-color: red;
     color: white;
     font-size: 15px;
     font-weight: bold;
     border: none;
    
`

export const Header = () =>{
    const navigate = useNavigate()

    let urlAtual = (window.location.href).split("/")
    
    let urlAgrupada = ''
    for(let i = 3; i<urlAtual.length; i++) {
        urlAgrupada = urlAgrupada.concat(urlAtual[i])
    }

    return(
        
        <HeaderContainer>
            <div>
                <ImgLogo id="ImgLogo" src={Logo} alt= "Logo Pokemon"/>
            </div>
        
            <div>
                {urlAtual.length > 0 && urlAtual[3] === "details" &&
                    <ContainerButton>
                        <Button onclick={() => {goToPokedex(navigate)}}>Pokedex</Button>
                        <Button onclick={() => {goBack(navigate)}}>Voltar</Button>
                    </ContainerButton>
                }
                { urlAgrupada.length === 0 && 
                        <Button onClick={() => {goToPokedex(navigate)}}>Pokedex</Button> 
                }
                { urlAtual.length > 0 && urlAgrupada === "pokedex" &&
                    <ContainerButton>
                        <Button onClick={() => {goToHome(navigate)}}> Home</Button>
                        <Button onClick={() => {goBack(navigate)}}>Voltar</Button> 
                    </ContainerButton>
                }
            </div> 
            
        </HeaderContainer>

        
    )
}