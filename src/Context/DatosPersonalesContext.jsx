import { createContext, useReducer } from "react";
import reducer from "./useReducer";
//Creamos un contexto llamado DatosPersonalesContext. Este contexto se usará para proporcionar y consumir valores en toda la aplicación.
export const DatosPersonalesContext = createContext();


// Componente proveedor que envuelve a sus hijos ({children}) y proporciona el contexto a los componentes que lo consumen.
export default function DatosPersonalesProvider({ children }) {
  ///Definimos el estado inicial del contexto
  const initialState = { nombre: "", apellido: "" };
//Utilizamos el hook useReducer para gestionar el estado. Devolvemos el estado actual (state) y una función (dispatch) para enviar acciones al reductor.
  const [state, dispatch] = useReducer(reducer, initialState);

  const completeNombre = (nombre) => {
    console.log(nombre)
    dispatch({
      type: "COMPLETE_NOMBRE",
      payload: nombre,
    });
  };
  const completeApellido = (apellido) => {
    console.log(apellido)
    dispatch({
      type: "COMPLETE_APELLIDO",
      payload: apellido,
    });
  };
////Envolvemos los componentes hijos y proporcionamos el contexto a los mismos. El value del Provider contiene las funciones creadas y los estados
  return (
    <DatosPersonalesContext.Provider
      value={{
        nombre: state.nombre,
        apellido: state.apellido,
        completeNombre,
        completeApellido,
      }}
    >
      {children}
    </DatosPersonalesContext.Provider>
  );
}
