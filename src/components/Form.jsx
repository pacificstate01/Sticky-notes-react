import { useState } from 'react';
export const Form = ({agregarNota,notas}) =>{
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [importante, setImportante] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (descripcion.trim() === "" || titulo.trim() === "" ) {
      alert("Ingrese informacion a los campos");
      return;
    }
    const title = notas.find(e => e.titulo === titulo);
    if(title){
      alert("ya existe el titulo");
      return;
    }
      const nuevaNota = {
        titulo,
        descripcion,
        importante,
      };
      agregarNota(nuevaNota);
      alert("Nota agregada");
      limpiar_campos();

  };
  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };
  
  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };
  
  const handleImportanteChange = (e) => {
    setImportante(e.target.checked);
  };
  
  const limpiar_campos = () => {
    setTitulo("");
    setDescripcion("");
    setImportante(false);
  };
  return (
    <form className="input-group d-flex mb-5" id="form" onSubmit={handleSubmit}>
      <input
        className="form-control m-2 rounded font-monospace"
        type="text"
        placeholder="Titulo"
        value={titulo}
        onChange={handleTituloChange}
      />
      <input
        className="form-control m-2 rounded font-monospace"
        type="text"
        placeholder="Descripcion"
        value={descripcion}
        onChange={handleDescripcionChange}
      />
      <div className="form-check m-2 impo">
        <input
          className="form-check-input"
          type="checkbox"
          id="check"
          checked={importante}
          onChange={handleImportanteChange}
        />
        <label className="form-check-label">Importante!</label>
      </div>
      <button className="btn btn-success m-3 rounded boton" id="add">
        Agregar
      </button>
    </form>
  );
}