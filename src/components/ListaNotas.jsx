import React from 'react';
import {Notas} from './Notas'; 

export const ListaNotas = ({ notas }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {notas.map((nota, index) => (
        <div className='col-lg-3 col-md-3'>
            <Notas key={index} nota={nota} />
        </div>
      ))}
    </div>
  );
}

