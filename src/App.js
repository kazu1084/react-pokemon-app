import {useEffect} from "react";
import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {getAllPokemon,getPokemon} from "./utils/mokemon.js";
function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading ,setLoding] = useState(true);
  
  useEffect(() => {
    const fetchPokemonDate = async () => {
      //全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      loadPokemon(res.results);
      setLoding(false);
    };
    fetchPokemonDate();
  });
  const loadPokemon = (data) => {
    let _pokemonData = Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
      );
  };
  return (
    <div className="App">
      {loading ? (
        <h1>ローディング中…</h1>
        ) : (
        <>  
          <h1>
          ポケモンのデータを取得しました  
          </h1>
        </>
          )}
    </div>      
  );
}

export default App;
