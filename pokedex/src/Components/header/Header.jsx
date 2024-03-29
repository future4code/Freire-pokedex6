import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/logo.png.png";
import { goToPokedex, goToHome} from "../../Routes/Coordinator";
import { useLocation } from "react-router-dom";
import { ImgLogo,HeaderContainer,TodosPok ,Pokedex,Deletar} from "./styled"




export const Header = () => {

  const navigate = useNavigate();
  let location = useLocation();
 
 
  





  return (
    <HeaderContainer>
      
          
          <div>
            {location.pathname != "/" ? (
              <TodosPok
                onClick={() => {
                  goToHome(navigate);
                }}
              >
                <strong>&lt; Todos Pokemons</strong>
              </TodosPok>
            ) : (
              <div className="b"></div>
            )}
          
          </div>
          
              <ImgLogo id="ImgLogo" src={Logo} alt="Logo Pokemon" />
          
          <div>
            {location.pathname === "/" ? (<Pokedex
                onClick={() => {
                  goToPokedex(navigate);
                }}
              >
               Pokedex
              </Pokedex>
            ) : (
                <div className="b"></div>
            )}
          </div>
         
    
    </HeaderContainer>
  );
};
