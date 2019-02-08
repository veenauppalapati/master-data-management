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
              <div className="row"> 
                <NavFrame 
                  currencyBacground={this.state.currentSelection=="Currency Master"? '#D6D5D5': 'white'}
                  bankBacground={this.state.currentSelection=="Bank Master"? '#D6D5D5': 'white'}
                  forecastBackground={this.state.currentSelection=="Forecast Template"? '#D6D5D5': 'white'}
                  activateCurrency={this.activateCurrency}
                  activateBank={this.activateBank}
                  activateForecast={this.activateForecast}
                />
                <MainFrame />
              </div>
            </div>
          </div>
        );
      }
}