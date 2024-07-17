export const Form = () =>{
    return (
        <form class="d-flex mb-5" id="form">
                <div class="input-group">
                    <input class="form-control m-2 rounded" type="text" placeholder="Titulo" id="title" />
                    <input class="form-control m-2 rounded" type="text" placeholder="Descripcion" id="description" />
                    <div class="form-check m-2 impo">
                        <input class="form-check-input" type="checkbox" id="check" />
                        <label class="form-check-label">
                            Importante !
                        </label>  
                    </div>
                    <button class="btn btn-success m-3 rounded" id="add">Agregar</button>
                </div>
        </form>
    );
}