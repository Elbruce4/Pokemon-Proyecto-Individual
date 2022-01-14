import './App.css';
import Home from './components/Home';
import React from 'react';
import {Route , Link} from "react-router-dom"
import SearchPoke from './components/SearchPoke';
import NavBar from "./components/Nav"
import CreatePoke from './components/CreatePoke';
import pikachu from "../src/pics/pikachu.jpg"

function App() {
  return (
    <div className="App">
      <Link to="/home" >
        <img src={pikachu} className='img'/>
      </Link>
      <Route path="/search" component={SearchPoke}/>
      <Route path="/home" component={Home}/>
      <Route path="/create" component={CreatePoke}></Route>
    </div>
  );
}

export default App;
