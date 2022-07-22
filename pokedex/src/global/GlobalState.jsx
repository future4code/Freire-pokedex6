import React, { useEffect, useState } from 'react'
import {GlobalStateContext} from './GlobalStateContext'



const GlobalState = (props) => {

    const [pokedex, setPokedex] = useState([])

    return (
        <div>
        <GlobalStateContext.Provider value={{pokedex,setPokedex}}> 
         {props.children}
         </GlobalStateContext.Provider> 
        </div>
    )
}
export default GlobalState;