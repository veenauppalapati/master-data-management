import React from 'react'

export default function TableRow() {
    const styles={
        rowStyling: {
            borderBottom: 'black dotted 2px',
        },
        columnStyling:{
            borderRight: 'black dotted 2px',
        }
    }
    return (
        <tr style={styles.rowStyling}>
            <td style={styles.columnStyling}></td>
            <td style={styles.columnStyling}></td>
            <td style={styles.columnStyling}></td>
            <td style={styles.columnStyling}></td>
        </tr>
    )
}
