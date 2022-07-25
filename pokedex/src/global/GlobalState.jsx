import React, { useEffect, useState } from 'react'
import {GlobalStateContext} from './GlobalStateContext'



const GlobalState = (props) => {

    const [pokedex, setPokedex,setName,name] = useState([])
    
    

    return (
        <div>
        <GlobalStateContext.Provider value={{pokedex,setPokedex,name,setName}}> 
         {props.children}
         </GlobalStateContext.Provider> 
        </div>
    )
}
export default GlobalState;