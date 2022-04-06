import React from "react";
const SECURITY_CODE = 'paradigma';

function UseState({ name }) { 
    const [state, setState] = React.useState({
        value: '',
        error: false, 
        loading: false,
        deleted: false,
        confirmed: false,
    })
    
    React.useEffect(() => {
        console.log("Empezando el efecto");
        if(!!state.loading) {
            setTimeout(() => {
                console.log("Haciendo la validacion");
                
                if(state.value === SECURITY_CODE){
                    setState({
                        ...state,
                        error:false,
                        loading: false,
                        confirmed: true,
                    });
                }else{
                    setState({
                        ...state,
                        error: true,
                        loading: false,
                    });
                }

                console.log("terminando la validacion");
            }, 3000);
        }

        console.log("terminando el efecto");
    },[state.loading])

    if(!state.deleted && !state.confirmed){
        return (
            <div>
                <h2>Eliminar {name}</h2>
    
                <p>Por favor escribe el codigo de seguridad </p>
    
                {(state.error && !state.loading) &&(
                    <p>Error: El codigo es incorrecto</p>
                )}
                {state.loading &&(
                    <p>Cargando...</p>
                )}
    
                <input 
                placeholder="Codigo de seguridad"
                value={state.value}
                onChange={(event) => {
                    setState({
                        ...state,
                        value: event.target.value,
                    }); ;
                }}
                />
                <button
                onClick={() => {
                    setState({
                        ...state,
                        loading: true,
                    });
                }}
                >Comprobar</button>
            </div>
        );
    }else if (state.confirmed && !state.deleted) {
        return (
            <React.Fragment>
                <p>Pedimos confirmacion. ¿Tas segurx?</p>
                <button
                    onClick={() => {
                        setState({
                            ...state,
                            deleted: true,
                            value: '',
                        })
                    }}
                >
                    Sí, eliminar
                </button>
                <button
                onClick={() => {
                    setState({
                        ...state,
                        confirmed: false,
                        value: '',
                    })
                }}
                >Nop, me arrepenti
                </button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p>Eliminado con exito</p>

                <button
                onClick={() => {
                    setState({
                        ...state,
                        confirmed: false,
                        deleted: false,
                        value: false,
                    })
                }}
                >
                    Resetear, volver atrás
                </button>
            </React.Fragment>
        );
    }
    
}

export { UseState };