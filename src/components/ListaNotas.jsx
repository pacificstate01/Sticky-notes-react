import React from 'react';
import {Notas} from './Notas'; 

export const ListaNotas = ({ notas,onDelete }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {notas.map((nota, index) => (
        <Notas key={index} nota={nota} onDelete={onDelete} />
        ))}
    </div>
  );
}

