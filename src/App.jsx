import { useState, useEffect } from "react";
import Pokemon from "./components/Pokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPokemons(jsonResponse.results);
      })
      .catch((error) => {
        console.error("Fetch pokemon error: ", error);
      });
  }, []);

  return (
    <main>
      <header>
        <h1>Pokédex</h1>
      </header>
      <section>
        {pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.name} name={pokemon.name} />;
        })}
      </section>
    </main>
  );
}
