import { useEffect } from "react";
import { useState } from "react";

export const Rrd = () => {
  const [user, setUsers] = useState([]); // ESTADO PARA ALMACENAR LOS DATOS
  let url = "https://jsonplaceholder.typicode.com/users"; // URL / API DONDE VAMOS A PEDIR LOS DATOS
  console.log(user);
  useEffect(() => {
    fetch(url) //HACEMOS LA PETICION HTTP
      .then((respuesta) => respuesta.json()) //CONVERTIMOS LA RESPUESTA A JSON
      .then((data) => setUsers(data)) //GUARDAMOS LOS DATOS EN EL ESTADO
      .catch((error) => console.error("Error!!!!!!", error));
  }, []); // EL SEGUNDO ARGUMENTO DEL USE EFFECT [] ASEGURA QUE LA PETICION SE HAGA UNA SOLA VEZ

  return (
    <div >
      React Router DOM
      <br />
      <hr />
      <h2>Lista de usuarios</h2>
      <ul>
        {user.map((oneUser) => (
          <li>{oneUser.name}</li> // RENDERIZAMOS LOS USUARIOS
        ))}
      </ul>
    </div>
  );
};
