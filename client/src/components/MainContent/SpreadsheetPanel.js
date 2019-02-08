import React from 'react'
import Table from './Table';

export default function SpreadsheetPanel() {
    const styles = {
        cardStyling: {
           margin: 10,
            boxSizing: 'borderBox',
            height: '80vh',
            backgroundColor: '#F5F5F5',
            overflow: 'scroll'
        }
    }
    return (

        <div className="card" style={styles.cardStyling}>
            <div className="card-body">
                <Table />
            </div>
        </div>

    )
}
