import React from 'react';
import './App.css';
import CalcForm from './CalcForm';


function App() {
 
   // always use functions (over classes) unless you need to maintain state
   // also, top level container components are usually classes

  return (
    <div className="app">
      <div className="app__header">
        <h1>Countertop Calculator</h1>
        <CalcForm />
      </div>
      <div className="app_results">
      Results
      </div>
    </div>
  );

  }
  export default App;

