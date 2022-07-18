import React from "react";
import {useNavigate} from "react-router-dom"
import { goToDetails,goToHome} from "../../Routes/Coordinator";

export const Pokedex = () => {
    const navigate = useNavigate()
return(
    
    <div>
        <h1>pokedex</h1>
        
        <button onClick={()=>{goToDetails(navigate)}}>details</button>
        <button onClick={()=>{goToHome(navigate)}}>home</button>
    </div>
)

}