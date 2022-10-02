
import "./App.css";
import Header from "./components/Header";
/* import styled from "styled-components"; */
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import MappedCharacters from "./components/MappedCharacters";
import AddFavorites from "./components/AddFavorites";


const URL = 'https://rickandmortyapi.com/api/character'; /* Das hier ist der API Link in einer Variablen */

function App() {

  const [characters, setCharacters] = useState([]);
  const [hasError, setHasError] = useState(false)

  /* Hier folgend wird von der API gefetched */
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

  return (
  <div className="App">
      <Header />
      
        {characters.map((character) => (
           <MappedCharacters
           name={character.name}
           gender={character.gender}
           status={character.status}
           species={character.species}
           image={character.image}
           favoriteComponent={AddFavorites}
        />
        ))}
     <Navbar />
  </div>
  )
}

export default App;

/* const CardElements = styled.li`
color: whitesmoke;
list-style: none;
`; */