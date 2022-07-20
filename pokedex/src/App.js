import { Router } from "../src/Routes/Routes";
import GlobalState from './global/GlobalState'

function App() {
  return (
    <div >
      <GlobalState>
      <Router/>
      </GlobalState>
    </div>
  );
}

export default App;
