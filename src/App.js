import logo from './logo.svg';
import './App.css';
import Substract from './components/substract/substract';

import {substract} from './components/Import'
import Addresses from './components/addresses/Addresses';

function App() {

  const result = substract(3,9)

  return (
    <div className="App">
    
      
      <Substract result={result} ></Substract>
      <h1>Showing some demo addreses</h1>
      <Addresses></Addresses>

    </div>
  );
}

export default App;
