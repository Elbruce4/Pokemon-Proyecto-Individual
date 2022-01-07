import './App.css';
import Home from './components/Home';
import React from 'react';
import {Route , Link} from "react-router-dom"
import SearchPoke from './components/SearchPoke';
import NavBar from "./components/Nav"

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Route path="/search" component={SearchPoke}/>
      <Route path="/home" component={Home}/>
    </div>
  );
}

export default App;
