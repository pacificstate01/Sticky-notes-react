import React from 'react';
import {Notas} from './Notas'; 

export const ListaNotas = ({ notas }) => {
  return (
    <div className="lista-notas d-flex flex-wrap">
      {notas.map((nota, index) => (
        <div className='col-lg-3'>
                <Notas key={index} nota={nota} />
        </div>
      ))}
    </div>
  );
}

