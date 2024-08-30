import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../api";

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  useEffect(() => {
    getPokemonByName(name)
      .then((pokemonReponse) => setPokemon(pokemonReponse))
      .catch((error) => console.error("[get pokemon by name]:", error));
  }, []);

  if (!pokemon.name) {
    return (
      <main className="w-screen h-screen flex items-center justify-center font-bold text-red-500">
        POKEMON NOT FOUND
      </main>
    );
  }

  return (
    <main>
      <img
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt={name}
      />
      <h1>{name}</h1>
      <section>
        <span>{pokemon.height}m</span>
        <span>{pokemon.weight}kg</span>
      </section>
      <section>
        {pokemon.types?.map((type) => {
          return <span key={type.slot}>{type?.type?.name}</span>;
        })}
      </section>
    </main>
  );
}
