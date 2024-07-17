import logo from "./logo.svg";
import {Form} from './components/Form';
import {ListaNotas} from './components/ListaNotas';
import "./App.css";
import "./Notes.css";

function App() {
  return (
    <div className="App" >
      <div class="container">
        <Form/>
        <ListaNotas/> 
      </div>
    </div>
  );
}

export default App;
