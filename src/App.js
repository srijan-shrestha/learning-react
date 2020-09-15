import React from 'react';
import './App.css';
import  HelloWorld from './Components/HelloWorld';
import  Footer from './Components/Footer';
import  CounterExample from './Components/CounterExample';
import  Header from './Components/Header';


function App() {
  return (
    <div>
    <Header />
    <HelloWorld name="Srijan"/>
    {/* <CounterExample /> */}
    <Footer />
    </div>
  );
}

export default App;
