export const ListaNotas = () =>{
    return(
    <div class="container xl d-flex flex-wrap">
              <div class="card text-center text-bg-info mb-3 p-3 m-3 note" style={{width: "18rem",height:"18rem"}}>
                <div class="card-body d-flex justify-content-between">
                  <h5 class="card-title">Special title treatment</h5>
                  <button class="btn-close"></button>
                </div>
              </div>
              <div class="card text-center text-bg-success mb-3 important p-3 m-3 noteimp" style={{width: "18rem",height:"18rem"}}>
                <div class="card-body d-flex justify-content-between">
                  <h5 class="card-title">Special title treatment</h5>
                  <button class="btn-close"></button>
                </div>
              </div>
          </div>
    );
}