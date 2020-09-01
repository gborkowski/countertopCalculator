import React from 'react';
import PropTypes from 'prop-types';


function DetailDisplay (props) {

    console.log(props.display);

    var details = ["No details"];
    if(props.display !== undefined) {
        details = props.display;
    }
    else {
        return '';
    }
    
    return (
        <ul> 
       {details.map((item, i) => {
            return <li key={i}>{item}</li>
        })}
        </ul>
    );
}

DetailDisplay.propTypes = {
    display: PropTypes.array.isRequired,
};


export default DetailDisplay;
