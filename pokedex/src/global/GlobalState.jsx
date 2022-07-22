import React, { useEffect, useState } from 'react'
import GlobalStateContext from './GlobalStateContext'
import axios from 'axios'
import { url_base } from '../Constants/url_base'


const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        getPokemonNames()
    }, [])

    const getPokemonNames = () => {
        axios.get(`${url_base}/pokemon`)
        .then((response) => {
            setPokemonNames(response.data.results)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
    const data = {pokemons, setPokemons, pokedex, setPokedex}
    return (
        <div>
        {/* O Provider vai enviart para todos os componentes que são filhos o que está no value */}
        <GlobalStateContext.Provider value={data}> 
        {/* props.children é tudo que vem dentro das tags do componente  */}
         {props.children}
         </GlobalStateContext.Provider> 
        </div>
    )
}
export default GlobalState;