import React from 'react'
import ButtonFrame from '../Buttons/ButtonFrame';
import SpreadsheetPanel from './SpreadsheetPanel';

export default function MainFrame() {
    const styles = {
        container: {
            // backgroundColor:'red',
            margin:0,
            padding:0,
            boxSizing:'borderBox',
            height:'100vh',
            width: '100%'
        }
    }
  return ( 
    <div className="col-md-9" style={styles.container}>
        <SpreadsheetPanel />
        <ButtonFrame />
    </div>
    
  )
}
