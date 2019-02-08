import React from 'react';

export default function Button(props) {
  
  return (
    
    <div className='col-xs-4'>
      <button type="button" className={props.bootstrapClasses} style={props.style} >{props.buttonName}</button>
    </div>
  )
}
