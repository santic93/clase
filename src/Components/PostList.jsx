import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export const PostList = () => {
  const [posts, setPosts] = useState([]);
  let url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
      .get(url) ///HACEMOS LA PETICION HTTP
      .then((respuesta) => setPosts(respuesta.data)); /// GUARDAMOS LA RESPUESTA EN EL ESTADO
  }, []);

  return (
    <div>
      PostList
      <br />
      <hr />
      <ol>
        {posts.length &&
          posts.map((post) => (
            <div key={post.id}>
              <li> {post.body}</li>
            </div>
          ))}
      </ol>
    </div>
  );
};
