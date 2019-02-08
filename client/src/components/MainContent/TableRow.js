import React from 'react'
import TableCell from './TableCell';

export default function TableRow(props) {
    const styles={
        rowStyling: {
            borderBottom: 'black dotted 2px',  
        },

        columnStyling:{
            borderRight: 'black dotted 2px', 
            textAlign:'center',
            // height: 20 
            // paddingTop:2,
            // paddingBottom:2  
        },

        cell1Style:  {
            borderRight: 'black dotted 2px', 
            textAlign:'center',
            fontWeight:'bold'
        }
       
    }
    return (
        <tr style={styles.rowStyling}>
            <TableCell content={props.cell1} cellStyle={styles.cell1Style} />
            <TableCell content={props.cell2} cellStyle={styles.columnStyling}/>
            <TableCell content={props.cell3} cellStyle={styles.columnStyling}/>
            <TableCell content={props.cell4} cellStyle={styles.columnStyling}/>
        </tr>
    )
}
