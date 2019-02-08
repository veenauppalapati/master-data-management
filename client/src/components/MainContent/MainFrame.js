import React from 'react'
import ButtonFrame from '../Buttons/ButtonFrame';
import SpreadsheetPanel from './SpreadsheetPanel';

export default function MainFrame() {
    const styles = {
        container: {
            margin:0,
            padding:0,
            boxSizing:'borderBox',
            backgroundColor:'red',
            height:'100vh',
            // width: '100%'
        }
    }
  return (
  
    <div class="col-md-9" style={styles.container}>
        <SpreadsheetPanel />
        <ButtonFrame />
    </div>
    
  )
}
