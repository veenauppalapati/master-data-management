import React from 'react';

export default function Button(props) {

  
  return (
    
    
      <button type="button" className={props.bootstrapClasses} style={props.style} >{props.buttonName}
       <span className={props.iconName}></span>
      </button>
   
  )
}
