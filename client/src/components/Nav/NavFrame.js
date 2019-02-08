import React from 'react';
import LinkCard from './LinkCard';


export default function NavFrame() {
    const styles = {
        navContainerStyling: {
            // backgroundColor: 'purple',
            margin: 0,
            padding: 0,
            boxSizing: 'borderBox',
            height: '100vh',
            padding: 20
        },
        cardStyling: {
            borderColor: 'white',
            padding: 0,

        }
    }
    return (
        <div className="col-md-3" style={styles.navContainerStyling}>
            <div className="card" style={styles.cardStyling}>
                <div className="card-body" style={{ padding: 5, margin: 2 }}>Master Data Management</div>
                <div className="card-body">
                    <LinkCard linkAddress="#" name="Currency Master" />
                    <LinkCard linkAddress="#" name="Bank Master" />
                    <LinkCard linkAddress="#" name="Forecast Template" />
                </div>
            </div>
        </div>
    )
}
