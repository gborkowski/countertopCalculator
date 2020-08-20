import React, {useState} from 'react';
import firebase from "firebase";
require("firebase/functions");


function CalcForm (props) {
 
    const firebaseConfig = {
        apiKey: "AIzaSyDMV7NiEvOkK04idU-jz56NJcC9nITEnxM",
        authDomain: "countertopcalculator.firebaseapp.com",
        databaseURL: "https://countertopcalculator.firebaseio.com",
        projectId: "countertopcalculator",
        storageBucket: "countertopcalculator.appspot.com",
        messagingSenderId: "438842232630",
        appId: "1:438842232630:web:3b719c7e1c243225ec2d97",
        measurementId: "G-K6JZT0H6TM"
    };
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    var costResult="";

 // classes automatically have 'props' - can just use it
 // classes should capitalize first letter of name
 const [species, setSpecies] = useState('walnut');
 const [width, setWidth] = useState(0);
 const [length, setLength] = useState(0);
 const [thickness, setThickness] = useState(1.5);
 const [breadBoards, setBreadBoards] = useState(false);
 const [minBoardWidth, setMinBoardWidth] = useState(6);
 const [rustic, setRustic] = useState(false);
 const [addColor, setAddColor] = useState(false);
 const [finish, setFinish] = useState('varnishSatin');
 
    
    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log("species: ",species)        
        console.log("width: ",width)        
        console.log("length: ",length)        
        console.log("thickness: ",thickness)        
        console.log("breadBoards: ",breadBoards)        
        console.log("minBoardWidth: ",minBoardWidth)        
        console.log("rustic: ",rustic)        
        console.log("addColor: ",addColor)        
        console.log("finish: ",finish)        
 
        var cost = firebase.functions().httpsCallable('calculateCountertopCost');

        cost({
            species: species,
            width: width,
            length: length,
            thickness: thickness,
            breadBoards: breadBoards,
            minBoardWidth: minBoardWidth,
            rustic: rustic,
            addColor: addColor,
            finish: finish
     }).then((result)=> {
        console.log("result.data.cost: ",result.data.cost);
        // pass costResult back to parent using handler passed in - how?
        props.onChangeValue(result.data.cost);
 

 
             }).catch((error)=> {
        console.log(error);   
     })
    };


         return (
            <form className="app__form">
                <label>Wood Species</label>
                 <select  value={species} onChange={e => setSpecies(e.target.value)}>
                    <option value="walnut">Walnut</option>
                    <option value="maple">Maple</option>
                    <option value="whiteOak">White Oak</option>
                    <option value="redOak">Red Oak</option>
                    <option value="alder">Alder</option>
                    <option value="pine">Pine</option>
                    <option value="cherry">Cherry</option>
                </select>

    
                <label>Width</label>
                <input 
                    placeholder="Width (inches)" 
                    value={width} 
                    onChange={e => setWidth(e.target.value)}
                />
                <label>Length</label>
                <input 
                    placeholder="Length (inches)" 
                    value={length} 
                    onChange={e => setLength(e.target.value)}
                />
                <label>Thickness</label>
                <input 
                    placeholder="Thickness (inches)" 
                    value={thickness} 
                    onChange={e => setThickness(e.target.value)}
                />
                <label>Bread board ends</label>
                <select value={breadBoards} onChange={e => setBreadBoards(e.target.value)}>
                    <option value="false">False</option>
                    <option value="true">True</option>
                </select>
                <label>Minimum Board Width</label>
                <input 
                    placeholder="Minimum Board Width (inches)" 
                    value={minBoardWidth} 
                    onChange={e => setMinBoardWidth(e.target.value)}
                />
                <label>Rustic (i.e. knots and defects)</label>
                <select value={rustic} onChange={e => setRustic(e.target.value)}>
                    <option value="false">False</option>
                    <option value="true">True</option>
                </select>
                <label>Add Color (dye / stain vs. natural wood)</label>
                <select value={addColor} onChange={e => setAddColor(e.target.value)}>
                    <option value="false">False</option>
                    <option value="true">True</option>
                </select>
                <label>Finish (top coat)</label>
                 <select  value={finish} onChange={e => setFinish(e.target.value)}>
                    <option value="varnishSatin">Varnish (Arm-R-Seal) Satin</option>
                    <option value="varnishSemiGloss">Varnish (Arm-R-Seal) Semi-Gloss</option>
                    <option value="varnishGloss">Varnish (Arm-R-Seal) Gloss</option>
                    <option value="rubioMonocoatPure">Rubio Monocoat (Pure)</option>
                    <option value="odiesOil">Odies Oil</option>
                    <option value="polyurethane">Polyurethane</option>
                    <option value="shellac">Shellac</option>
                </select>
                <br />
                <button onClick={e => onSubmit(e)}>Calculate Cost</button>
            </form>
        )

}

export default CalcForm;
