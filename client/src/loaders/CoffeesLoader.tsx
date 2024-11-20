import type { LoaderFunction } from "react-router-dom";

const PokemonLoader: LoaderFunction = async () => {
  return fetch("http://localhost:4000/api/coffee")
    .then((response) => response.json())
    .then((result) => result);
};

export default PokemonLoader;
