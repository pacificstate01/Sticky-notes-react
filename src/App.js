import { useState } from 'react';
import {Form} from './components/Form';
import {ListaNotas} from './components/ListaNotas';
import "./Notes.css";
import "./App.css";


function App() {
  const [notas,setNotas] = useState([]);
  const agregarNota = (nota) => {
    setNotas([...notas, nota]);
  };

  return (
    <div className="App" >
      <div className="container">
        <div class="container xl d-flex flex-wrap">
          <Form agregarNota={agregarNota}/>
          <ListaNotas notas={notas}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
