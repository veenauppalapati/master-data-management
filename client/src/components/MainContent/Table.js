import React from 'react'
import TableRow from './TableRow';

export default function Table() {
    const styles={
        columnHeadingStyling:{
            fontSize:12,    
            
            textAlign:'center',
            padding:5
        },
        
    }
    return (
        <div>
            <div class="container">
                <h2 style={{fontSize:'14px', fontWeight:'bold',textAlign:'center', borderBottom: '1.5px solid darkgray', padding:'10px', marginBottom:'20px'}}>Supported Currencies</h2>
                
                <table class="table">
                    <thead>
                        <tr>
                            <th style={styles.columnHeadingStyling}>Currency</th>
                            <th style={styles.columnHeadingStyling}>Symbol</th>
                            <th style={styles.columnHeadingStyling}>Description</th>
                            <th style={styles.columnHeadingStyling}>Exchange Rate</th>
                        </tr>
                    </thead>
                    <tbody>
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
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                    </tbody>
                </table>
            </div>

        </div>
    )
}

