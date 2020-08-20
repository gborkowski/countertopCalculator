import React, {useState} from 'react';
import './App.css';
import CalcForm from './CalcForm';


function App() {
 
   // always use functions (over classes) unless you need to maintain state
   // also, top level container components are usually classes
   const [costResult, setCostResult] = useState('costResult');

   const handleChangeValue = e => setCostResult(e);
 
   return (
    
    <div className="app">
    <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-functions.js"></script>
      <div className="app__header">
        <h1>Countertop Calculator</h1>
        <CalcForm onChangeValue={handleChangeValue}/>
      </div>
      <div className="app_results">
      <b>Material Cost: $</b>{costResult.costFixed}
      <br />
      <b>Labor Cost: $</b>{costResult.laborFixed} 

      </div>
    </div>
  );

  }
  export default App;

