import React from 'react';
import {Notas} from './Notas'; 

export const ListaNotas = ({ notas }) => {
  return (
    <div>
      {notas.map((nota, index) => (
        <Notas key={index} nota={nota} />
      ))}
    </div>
  );
}

