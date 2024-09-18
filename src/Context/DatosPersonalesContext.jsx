import { createContext, useReducer } from "react";
import reducer from "./useReducer";
export const DatosPersonalesContext = createContext();

export default function DatosPersonalesProvider({ children }) {
  const initialState = { nombre: "", apellido: "" };

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
