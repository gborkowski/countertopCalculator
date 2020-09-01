import React, {useState, useEffect} from 'react';
import './App.css';
import CalcForm from './CalcForm';
import DetailDisplay from './DetailDisplay';
import { ContentClient } from 'dc-delivery-sdk-js';


const client = new ContentClient({
  hubName: 'multihub-thom'
});

function App() {
 
  const [species, setSpecies] = useState('walnut');
  const [costResult, setCostResult] = useState([]);
   const [ampData, setAmpData] = useState({
     _meta: '',
     imageUrl: '',
     component: '',
     title: ''
   });

   const handleChangeValue = e => setCostResult(e);
   const changeSpecies = s => setSpecies(s);

   // run this whenever species changes (via form submit)
   useEffect(() => {
    const contentKey = "countertop/"+species;
    client
      .getContentItemByKey(contentKey)
      .then(content => {
        console.log("Content key: ",contentKey);
        console.log("Amp: Content body: ",content.body);
        setAmpData({
          ...ampData,
          _meta: content.body._meta,
          imageUrl: "https://" + 
            content.body.image.defaultHost + "/i/" + 
            content.body.image.endpoint + "/" + 
            content.body.image.name + "?w=300&h=300",
          component: content.body.component,
          title: content.body.title
        });
      
      })
      .catch(error => {
        console.log('content not found', error);
      });
  
  }, [species])
  
   return (
    <div className="app">
    <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-functions.js"></script>
      <div className="app__header">
        <h1>Countertop Configurator</h1>
        <CalcForm onChangeValue={handleChangeValue} onChangeSpecies={changeSpecies}/>
      </div>
      <div className="app_results">
      <b>Material Cost: $</b>{ parseInt(costResult.costFixed) || 0}
        <DetailDisplay display={costResult.materialDetails} />
      <br />
      <b>Labor Cost: $</b>{parseInt(costResult.laborFixed) || 0} 
      <br />
        <DetailDisplay display={costResult.laborDetails} />
      <br />
      <b>Project Total: $</b>{parseInt(costResult.costFixed + costResult.laborFixed) || 0} 
      <br />
      <br />

      <div className="amp_content">
        {ampData.title}<p></p>
        <img src={ampData.imageUrl} alt=''></img>
      </div>


      </div>
    </div>
  );

  }
  export default App;

