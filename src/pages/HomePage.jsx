import { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon";
import { getPokemonList } from "../api";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonList()
      .then((pokemonListResponse) => setPokemons(pokemonListResponse))
      // .then(setPokemons) // magia negra
      .catch((error) => console.error("Fetch pokemon error: ", error));
  }, []);

  return (
    <main className="p-4 flex flex-col gap-4">
      <header className="flex items-center justify-center w-full">
        <img
          className="h-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt={"Pokémon logo"}
        />
      </header>

      <section className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </section>
    </main>
  );
}
