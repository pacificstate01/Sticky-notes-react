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
  const Delete = (titulo) =>{
    const NotasRestantes= notas.filter(nota => nota.titulo !== titulo);
    alert("Nota eliminada");
    setNotas(NotasRestantes);
  }
  return (
    <div className="App" >
      <div className="container">
        <h1 className="text-start">Post-it</h1>
        <div className="container xl d-flex flex-wrap">
          <Form agregarNota={agregarNota} notas={notas}/>
          <ListaNotas notas={notas} onDelete={Delete}/>
        </div>
      </div>
    </div>
  );
}

export default App;
