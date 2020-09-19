import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import  Footer from './Components/Footer';
import  Header from './Components/Header';
import  Home from './Views/Home';
import  About from './Views/About';
import  Product from './Views/Product';

function App() {
  return (
    <div>
    <Router>

    <Header />
    <div className="p-3">
      
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
      <About />
      </Route>
      <Route path="/product">
      <Product />
      </Route>
    </Switch>
    </div>

    <Footer />

    </Router>

    </div>
  );
}

export default App;
