import React from 'react'

export default function TableCell(props) {
  
  return (
    // Table cell component
      <td style={props.cellStyle}>{props.content}</td> 
  )
}
 