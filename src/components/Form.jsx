import { useState } from 'react';
export const Form = ({agregarNota}) =>{
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [importante, setImportante] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (descripcion.trim() === "" || titulo.trim() === "" ) {
      alert("Ingrese informacion a los campos");
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
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        className="form-control m-2 rounded font-monospace"
        type="text"
        placeholder="Descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <div className="form-check m-2 impo">
        <input
          className="form-check-input"
          type="checkbox"
          id="check"
          checked={importante}
          onChange={(e) => setImportante(e.target.checked)}
        />
        <label className="form-check-label">Importante!</label>
      </div>
      <button className="btn btn-success m-3 rounded boton" id="add">
        Agregar
      </button>
    </form>
  );
}