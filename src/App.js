import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { type } from "@testing-library/user-event/dist/type";

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

  return <div className="App">
    <header>
      <Header />
    </header>
    <main>
    <Card />
    <ul>
        {characters.map(({name, status, id, gender, species}) => (
          <li key={id}>
            <h2>{name}</h2>
            <p>Gender:{gender}</p>
            <p>Status:{status}</p>
            <p>Species:{species}</p>
          </li>
        ))}
      </ul> {/* Hier wird über die gefetchten Characters gemappt */}
    
      </main>
     <Navbar />
  </div>;
}

export default App;
