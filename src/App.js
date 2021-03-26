import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Me from './components/me';
import Resume from './components/resume';
import About from './components/about';
import Contact from './components/contact';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
      <Header className="Header"/>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Me/>
    </HashRouter>
    </div>
  );
}

export default App;
