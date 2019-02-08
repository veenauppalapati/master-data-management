import React from 'react'
import TableCell from './TableCell';

export default function TableRow(props) {
    const styles={
        rowStyling: {
            borderBottom: 'black dotted 2px',
            
        },
        columnStyling:{
            borderRight: 'black dotted 2px',
            fontSize:'12px', 
            fontWeight:'bold',
            textAlign:'center', 
       
        }
    }
    return (
        <tr style={styles.rowStyling}>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
        </tr>
    )
}
