import React from 'react'
import TableCell from './TableCell';

export default function TableRow(props) {
    const styles={
        rowStyling: {
            borderBottom: 'black dotted 2px',
           
        },
        cell1Style:{
            color:'red',
            fontWeight: 'bold'
        }
       
    }
    return (
        <tr style={styles.rowStyling}>
            <TableCell content={props.cell1} style={styles.cell1Style}/>
            <TableCell content={props.cell2} />
            <TableCell content={props.cell3} />
            <TableCell content={props.cell4}/>
        </tr>
    )
}
