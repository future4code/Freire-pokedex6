import React from 'react'
import { Router } from "../src/Routes/Routes";
import GlobalState from './global/GlobalState'

function App() {
  return (
    <GlobalState>
      
      <Router/>
      
    </GlobalState>
  );
}

export default App;
