import React from 'react'
import TableRow from './TableRow';

export default function Table() {
    const styles = {
        columnHeadingStyling: {
            fontSize: 12,
            textAlign: 'center',
            padding: 5
        },
        cellStyling: {
            borderRight: 'black dotted 2px',
            fontSize: '14px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'red'
        }

    }
    return (
        <div>
            {/* This is the Title for the spreadsheet panel */}
            <h2
                style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    borderBottom: '1.5px solid darkgray',
                    padding: '10px',
                    marginBottom: '20px'
                }}>Supported Currencies
            </h2>

            <table class="table">
                {/* This is the heading section of the table cells */}
                <thead>
                    <tr>
                        <th style={styles.columnHeadingStyling}>Currency</th>
                        <th style={styles.columnHeadingStyling}>Symbol</th>
                        <th style={styles.columnHeadingStyling}>Description</th>
                        <th style={styles.columnHeadingStyling}>Exchange Rate</th>
                    </tr>
                </thead>
                {/* Body section-- loads the TableRow Component */}
                <tbody>
                    <TableRow cell1="GBP" cell2='$1' cell3="British Pound" cell4="0.70 USD" style={styles.cellStyling} />
                    <TableRow cell1="AUD" />
                    <TableRow cell1="CAD" />
                    <TableRow cell1="INR" />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                </tbody>
            </table>
        </div>


    )
}

