import React from 'react';
import Button from './Button';

export default function ButtonFrame() {
    const styles = {

        frameStyle: {
            marginRight: -1,
            backgroundColor: '#F5F5F5',
            display: 'flex',
            flex: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            
        },

        buttonStyle: {
            backgroundColor: "#01A2FF",
            width: '8em',
            margin: 7,
            textAlign: 'center',
            border: 'none',
            boxShadow: '0 2px 10px grey'
        },

        buttonStyleGreen: {
            backgroundColor: "#61D836",
            width: '8em',
            margin: 7,
            textAlign: 'center',
            border: 'none',
            boxShadow: '0 2px 10px grey'
        },

        buttonStyleRed: {
            backgroundColor: "#EE220D",
            width: '8em',
            margin: 7,
            textAlign: 'center',
            border: 'none',
            boxShadow: '0 2px 10px grey'
        },

        cardStyling: {
            margin: 10,
            boxSizing: 'borderBox',
            backgroundColor: '#F5F5F5'
        }

    }

    return (
        // This div frame is holding all the buttons toghether
        <div className='col-md-12' style={styles.frameStyle}>
            <Button bootstrapClasses="btn btn-primary " style={styles.buttonStyle} buttonName="New"/>
            <Button bootstrapClasses=" btn btn-primary" style={styles.buttonStyle} buttonName="Edit" />
            <Button bootstrapClasses="btn btn-primary " style={styles.buttonStyle} buttonName="Delete" />
            <Button bootstrapClasses="btn btn-primary " style={styles.buttonStyleGreen} buttonName="Submit" />
            <Button bootstrapClasses="btn btn-primary " style={styles.buttonStyleRed} buttonName="Cancel" />
        </div>

    )
}
