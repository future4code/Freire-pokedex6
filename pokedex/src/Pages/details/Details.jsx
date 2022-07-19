import React from "react";
import {useNavigate} from "react-router-dom"
import { goToHome,goToPokedex } from "../../Routes/Coordinator";

export const Details = () => {
    const navigate = useNavigate()
return(
    
    <div>
        <h1>details</h1>
        <button onClick={()=>{goToPokedex(navigate)}}>pokedex</button>
        <button onClick={()=>{goToHome(navigate)}}>Home</button>
    </div>
)

}