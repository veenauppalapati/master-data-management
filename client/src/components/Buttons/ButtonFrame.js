import React from 'react';
import Button from './Button';

export default function ButtonFrame() {
    const styles = {
        
        
            frameStyle: {          
              margin:10,
              backgroundColor: '#F5F5F5',
              display: 'flex',
              flex:'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              width:'100%'
          },

        buttonStyle: {
            backgroundColor: "#01A2FF",
            width: '9em',
            margin: 8,
            textAlign: 'center'
        },

        buttonStyleGreen: {
            backgroundColor: "#61D836",
            width: '9em',
            margin: 8,
            textAlign: 'center'
        },

        buttonStyleRed: {
            backgroundColor: "#EE220D",
            width: '9em',
            margin: 8,
            textAlign: 'center'
        },

        cardStyling: {
            margin: 10,
            boxSizing: 'borderBox',
            backgroundColor: '#F5F5F5'
        }

    }

    return (
        
                <div className="container">
                    <div className="row">
                    <div className='col-xs-12' style= {styles.frameStyle}>
                        <Button bootstrapClasses="btn btn-primary " style={styles.buttonStyle} buttonName="New" iconName="glyphicon glyphicon-pluspro"/>
                        <Button bootstrapClasses=" btn btn-primary" style={styles.buttonStyle} buttonName="Edit" />
                        <Button bootstrapClasses="btn btn-primary " style={styles.buttonStyle} buttonName="Delete" />
                        <Button bootstrapClasses="btn btn-primary " style={styles.buttonStyleGreen} buttonName="Submit" />
                        <Button bootstrapClasses="btn btn-primary " style={styles.buttonStyleRed} buttonName="Cancel" />
                        </div>
                        
                    </div>
                </div>
         
    )
}
