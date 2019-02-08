import React from 'react';
import LinkCard from './LinkCard';


export default function NavFrame({currencyBacground, 
    bankBacground, forecastBackground, activateCurrency,activateBank, activateForecast}) {
    const styles = {
        navContainerStyling: {
            // backgroundColor: 'purple',
            margin: 0,
            padding: 0,
            boxSizing: 'borderBox',
            height: '100vh',
        },
        cardStyling: {
            borderColor: 'white',
            padding: 0,

        }
    }

    return (   
        //  This section consists of the Nav Conents
        <div className="col-md-3" style={styles.navContainerStyling}>    
            <div className="card" style={styles.cardStyling}>
                {/* Nav Bar Title */}
                <div className="card-body" 
                    style={{ 
                        paddingLeft: 25, 
                        margin: 2, 
                        fontSize:'3vh', 
                        fontWeight:300}}>Master Data Management
                </div>
                
                {/* Nav Bar Elements */}
                <div className="card-body">
                    <LinkCard linkAddress="#" name="Currency Master" backgroundColor={currencyBacground} 
                    activeTabBackgroundColor={activateCurrency}/>
                    <LinkCard linkAddress="#" name="Bank Master" backgroundColor={bankBacground}
                    activeTabBackgroundColor={activateBank}/>
                    <LinkCard linkAddress="#" name="Forecast Template" backgroundColor={forecastBackground}
                    activeTabBackgroundColor={activateForecast}/>
                </div>
            </div>
        </div>
        
    )
}
