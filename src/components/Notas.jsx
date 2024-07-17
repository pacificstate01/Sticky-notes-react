import React from 'react';
export const Notas = ({nota}) =>{
    const { titulo, descripcion, importante } = nota;
    const important = importante;
    if(important === true){
        return(
            <div className="card text-center text-bg-danger mb-3 p-3 m-3 noteimp">
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title">{titulo}</h5>
                  <p className='card-text font-monospace text-left text-break'>{descripcion}</p>
                  <button className="btn-close"></button>
                </div>
                
            </div>
        );
    }else{
        return( 
            <div className="card text-center text-bg-info mb-3 important p-3 m-3 note">
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">{titulo}</h5>
                    <p className='card-text font-monospace text-left text-break'>{descripcion}</p>
                    <button className="btn-close"></button>
                </div>
            </div>
        );

    }
}