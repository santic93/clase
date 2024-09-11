import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export const PostList = () => {
  const [posts, setPosts] = useState([]);
  let url = "https://jsonplaceholder.typicode.com/posts";
  console.log(posts);
  useEffect(() => {
    axios.get(url) ///HACEMOS LA PETICION HTTP
    .then((respuesta) => setPosts(respuesta.data)); /// GUARDAMOS LA RESPUESTA EN EL ESTADO
  }, []);

  return <div>PostList</div>;
};
