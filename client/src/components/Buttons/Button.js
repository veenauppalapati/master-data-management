import React from 'react';

export default function Button(props) {
const styles= {
  iconStyling:{
    marginRight:10
  }
}
  
  return (
    
    
      <button type="button" className={props.bootstrapClasses} style={props.style} >
       <i className={props.iconName} style={styles.iconStyling}></i>
       {props.buttonName}
      </button>
   
  )
}
