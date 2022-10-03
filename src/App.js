
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Random from "./components/Random";
import { useState, useEffect } from "react";
import MappedCharacters from "./components/MappedCharacters";
import AddFavorites from "./components/AddFavorites";
import SearchBox from "./components/Searchbox";
import { Routes, Route, useNavigate,  } from "react-router-dom";

const URL = 'https://rickandmortyapi.com/api/character';

function App() {

  const [characters, setCharacters] = useState([]);
  const [hasError, setHasError] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState([])


  async function fetchCharacters() {
    try {
      const response = await fetch(URL);
      const result = await response.json() 
      setCharacters(result.results);
      setHasError(false);
    }
    catch(error) {
    setHasError(true);
    console.error(error);
    }
  }
 /*  Ohne den useEffect klappt das fetchen und rendern der Cards nicht!!! */
  useEffect(() => { 
    fetchCharacters();
  }, []);

  const addFavoriteCharacter = (character) => {
    const newFavoriteList = [...favorites, character];
    setFavorites(newFavoriteList);
  }

  return (
  <div className="App">
      <Header />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
      <Route
  path="/"
  element={(
    <>
      {characters.map((character) => (
        <MappedCharacters
          key={character.id} 
          name={character.name}
          gender={character.gender}
          status={character.status}
          species={character.species}
          image={character.image}
          favoriteComponent={AddFavorites}
          handleFavoritesClick={addFavoriteCharacter}
        />
      ))}
    </>
  )}
/>

<Route path="/favorites" element={<AddFavorites />} />

<Route
  path="/random"
  element={(
    <>
      <Random />
    </>
  )}
/>
<Route path="*" element={<h1>Page does not exist.</h1>} />
</Routes>
     <Navbar />
  </div>
  )
}



export default App;

/* const CardElements = styled.li`
color: whitesmoke;
list-style: none;
`; */
