import React from 'react';
import {Notas} from './Notas'; 

export const ListaNotas = ({ notas,onDelete }) => {
  if (notas.length === 0) {
    return <h1>No hay notas</h1>;
  }
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {notas.map((nota, index) => (
        <Notas key={index} nota={nota} onDelete={onDelete} />
        ))}
    </div>
  );
}

