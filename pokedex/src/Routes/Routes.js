import react from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Home} from '../../src/Pages/home/Home'
import {Pokedex} from "../../src/Pages/pokedex/Pokedex"
import {Details} from '../../src/Pages/details/Details'


export const Router = () => {
    return (
        
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='pokedex' element={<Pokedex/>}/>
            <Route path='details' element={<Details/>}/>
        </Routes>
        </BrowserRouter>
      
    )

}
