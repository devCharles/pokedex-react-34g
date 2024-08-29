import clsx from "clsx";
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
    <article
      className={clsx(
        "ring-2 rounded-xl ring-white/5 flex flex-col items-center gap-4 p-5",
        "hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-blue-500 hover:border-black",
        "transition-all duration-500 ease-in-out",
        "group"
      )}
    >
      <img
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt={pokemon.name}
        className="group-hover:scale-150 transition-transform duration-150 ease-in"
      />
      <h2>{name}</h2>
    </article>
  );
}
