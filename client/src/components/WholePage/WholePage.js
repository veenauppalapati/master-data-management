import React, { Component } from 'react';
import NavFrame from '../Nav/NavFrame';
import MainFrame from '../MainContent/MainFrame'

const styles = {
    mainAppStyling: {
      margin: 0,
      padding: 0,
      boxSizing: 'borderBox'
    }
  }
// This component puts together all the components.  This is the main Component that comes after the app.js
export default class WholePage extends Component {

    state= {
        currentSelection: "Currency Master",
      }

      activateCurrency = () => {
        this.setState({currentSelection: 'Currency Master'})
      }
    
      activateBank = () => {
        this.setState({currentSelection: 'Bank Master'})
      }
    
      activateForecast = () => {
        this.setState({currentSelection: 'Forecast Template'})
      }
    
      render() {
        return (
          <div className="App">
            <div className="container-fluid" style={styles.mainAppStyling}>
              <div className="row" style={{margin:0}}> 
                {/* This Component loads the Nav Panel on the left */}
                <NavFrame 
                  currencyBacground={this.state.currentSelection=="Currency Master"? '#D6D5D5': 'white'}
                  bankBacground={this.state.currentSelection=="Bank Master"? '#D6D5D5': 'white'}
                  forecastBackground={this.state.currentSelection=="Forecast Template"? '#D6D5D5': 'white'}
                  activateCurrency={this.activateCurrency}
                  activateBank={this.activateBank}
                  activateForecast={this.activateForecast}
                />
                {/* This Component loads the Right Side Panel, the main panel on the right */}
                <MainFrame />
              </div>
            </div>
          </div>
        );
      }
}