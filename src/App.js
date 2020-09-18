import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import  HelloWorld from './Components/HelloWorld';
import  Footer from './Components/Footer';
import  CounterExample from './Components/CounterExample';
import  Header from './Components/Header';

function App() {
  return (
    <div>
    <Router>

    <Header />
    
    <Switch>
      <Route exact path="/">
        <h1 className="font-bold text-2xl">This is the home page</h1>
      </Route>
      <Route path="/about">
      <h1 className="font-bold text-2xl">About us</h1>
      </Route>
    </Switch>

    <Footer />

    </Router>

    </div>
  );
}

export default App;
