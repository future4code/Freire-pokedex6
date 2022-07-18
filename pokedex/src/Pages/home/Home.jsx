import React from "react";
import {useNavigate} from "react-router-dom"
import { goToDetails,goToPokedex } from "../../Routes/Coordinator";

export const Home = () => {
    const navigate = useNavigate()
    
return(
    
    <div>
        <h1>Home</h1>
        <button onClick={()=>{goToPokedex(navigate)}}>pokedex</button>
        <button onClick={()=>{goToDetails(navigate)}}>details</button>
       
    </div>
)

}