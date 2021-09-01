import './App.css';
import { useState } from 'react';
// import Classbased from './Classbased';
import Functional from './Functional';

function App() {

//  const [name,setName] = useState("Cedric");

  return (
    <div className="App">
      {/*<Classbased name = 'Cedric' surname= 'Kissinger'/>*/}
      <Functional />
    </div>
  );
}

export default App;
