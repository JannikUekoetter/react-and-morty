import logo from "./logo.svg";
import "./App.css";

function App() {
  return <div className="App">
    <header>
      <h1>React and Morty</h1>
    </header>
    <main>
    <card>
        <h3>Character Name:</h3>
        <p>Morty Smith</p>
        <img alt="character img" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"></img>
        <br></br>
        <button>Show more</button>
      </card>
      </main>
      <footer>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'blue' }}>Nav 1</div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'red' }}>Nav 2</div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'green' }}>Nav 3</div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'yellow' }}>Nav 4</div>
            </li>
          </ul>
        </nav>
      </footer>
  </div>;
}

export default App;
