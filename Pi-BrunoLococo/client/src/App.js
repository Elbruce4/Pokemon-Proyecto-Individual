import './App.css';
import Home from './components/Home';
import React from 'react';
import {Route , Link} from "react-router-dom"
import SearchPoke from './components/SearchPoke';
import NavBar from "./components/Nav"
import CreatePoke from './components/CreatePoke';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Route path="/search" component={SearchPoke}/>
      <Route path="/home" component={Home}/>
      <Route path="/create" component={CreatePoke}></Route>
    </div>
  );
}

export default App;
