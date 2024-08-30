import clsx from "clsx";
import { useEffect, useState } from "react";
import { getPokemonByName } from "../api";
import { useNavigate } from "react-router-dom";

// export default function Pokemon(props) {
export default function Pokemon({ name }) {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemonByName(name)
      .then((pokemonResponse) => setPokemon(pokemonResponse))
      .catch((error) => console.error("Fetch pokemon error: ", error));
  }, []);

  return (
    <article
      onClick={() => {
        // window.location.assign(`/pokemon/${name}`);
        navigate(`/pokemon/${name}`);
      }}
      className={clsx(
        "w-full h-full",
        "ring-2 rounded-xl ring-white/5 flex flex-col items-center gap-4 p-5",
        "hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-blue-500 hover:border-black",
        "transition-all duration-500 ease-in-out",
        "group"
      )}
    >
      <img
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt={pokemon.name}
        className={clsx(
          "group-hover:scale-150 transition-transform duration-200 ease-in-out",
          {
            "w-full h-40 bg-white/20 animate-pulse rounded-full ring-0":
              !pokemon.sprites,
          }
        )}
      />
      <a className="capitalize">{name}</a>
    </article>
  );
}
