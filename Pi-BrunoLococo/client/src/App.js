import './App.css';
import Home from './components/Home';
import React from 'react';
import {Route , Link} from "react-router-dom"
import SearchPoke from './components/SearchPoke';
import CreatePoke from './components/CreatePoke';
import pikachu from "../src/pics/150.jpg"
import Detail from './components/Detail';
import First from './components/First';
import NavBar from './components/Nav';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={First}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/search" component={SearchPoke}/>
      <Route path="/home" component={Home}/>
      <Route path="/create" component={CreatePoke}></Route>
    </div>
  );
}

export default App;
