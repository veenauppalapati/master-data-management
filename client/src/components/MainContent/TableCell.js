import React from 'react'

export default function TableCell(props) {
    const styles={
       
        columnStyling:{
            borderRight: 'black dotted 2px',
            fontSize:'14px', 
            fontWeight:'',
            textAlign:'center', 
            // paddingTop:2,
            // paddingBottom:2
        },
        
    }
  return (
    // Table cell component
      <td style={styles.columnStyling}>{props.content}</td>
    
   
  )
}
 