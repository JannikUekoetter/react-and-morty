import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return <div className="App">
    <header>
      <Header />
    </header>
    <main>
    <Card />
      </main>
     <Navbar />
  </div>;
}

export default App;
