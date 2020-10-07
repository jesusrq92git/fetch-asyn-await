import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [pokemons, setPokemons] = useState({});
  const [error, setError] = useState('');

  //import function
  const searchPokemons = async (url) => {
    const request = await fetch(url);
    if(request.ok){
      return await request.json();
    } else {
      return null;
    }
  };

  const getPokemons = () => {
    searchPokemons('https://pokeapi.co/api/v2/pokemon')
      .then((res)=>{
        if(!!res){
          setPokemons(res.results);
          setError("");
        } else {
          setError("Error al buscar...");
        }
      })
  }

  return (
    <div>
      <button onClick={getPokemons}>
        Click me
      </button>
      <pre>
        {
          !!error ? error : JSON.stringify(pokemons, null, 2)
        }
      </pre>
    </div>
  );
}
