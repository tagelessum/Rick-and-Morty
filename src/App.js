import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import CharacterList from './components/CharacterList/CharacterList';

import Character from './components/Character/Character';

import HomePage from './components/HomePage/HomePage';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <main>
        <Switch>
        <Route exact path="/" component={CharacterList}></Route>/>
        <Route exact path="/characters/:id" component={HomePage}></Route>/>
        </Switch>
      </main>
    </div>
  </Router>
  );
}

export default App;
