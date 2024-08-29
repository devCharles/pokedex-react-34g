import { useEffect, useState } from "react";

// export default function Pokemon(props) {
export default function Pokemon({ name }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPokemon(jsonResponse);
      })
      .catch((error) => {
        console.error("Fetch pokemon error: ", error);
      });
  }, []);

  return (
    <article>
      <img
        // src={pokemon.sprites && pokemon.sprites.other && pokemon.sprites.other["official-artwork"] && pokemon.sprites.other["official-artwork"].front_default}
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt=""
      />
      <h2>{name}</h2>
    </article>
  );
}
