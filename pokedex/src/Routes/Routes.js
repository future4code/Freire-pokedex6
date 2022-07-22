import react from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Home} from '../../src/Pages/home/Home'
import {Pokedex} from "../../src/Pages/pokedex/Pokedex"
import {Details} from '../../src/Pages/details/Details'
import { Header } from '../Components/header/Header';


export const Router = () => {
    return (
        
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='pokedex' element={<Pokedex/>}/>
            <Route path='details/:poke' element={<Details/>}/>
        </Routes>
        </BrowserRouter>
      
    )

}
