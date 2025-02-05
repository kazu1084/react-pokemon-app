import logo from './logo.svg';
import './App.css';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/";
  
  useEffect(() => {
    const fetchPokemonDate = async () => {
      //全てのポケモンデータを取得
      let les = await getAllPokemon();
    }
  });
  return (
    <div className="App"></div>
  );
}

export default App;
