import React from 'react'

export default function TableCell(props) {
    const styles={
       
        columnStyling:{
            borderRight: 'black dotted 2px',
            fontSize:'12px', 
            fontWeight:'bold',
            textAlign:'center', 
       
        }
    }
  return (
    
      <td style={styles.columnStyling}></td>
   
  )
}
