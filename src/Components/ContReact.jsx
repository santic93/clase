import React, { useContext } from "react";
import { DatosPersonalesContext } from "../Context/DatosPersonalesContext";

export const ContReact = () => {

  ///Nos traemos las funciones y los estados creados desde el Contexto,con el hook useContext
  const { completeNombre, completeApellido, apellido, nombre } = useContext(
    DatosPersonalesContext
  );

  const handleChange = (e) => {
    if (e.target.name === "nombre") {
      completeNombre(e.target.value);
    } else {
      completeApellido(e.target.value);
    }
    //
  };
  return (
    <div>
      ContReact
      <hr />
      <br />
      <form action="">
        <input
          type="text"
          onChange={handleChange}
          name="nombre"
          placeholder="nombre"
        />
        <br />
        <hr />
        <input
          type="text"
          onChange={handleChange}
          name="apellido"
          placeholder="apellido"
        />
      </form>
    </div>
  );
};
