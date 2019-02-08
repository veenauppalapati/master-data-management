import React, { Component } from 'react';

import ButtonFrame from './components/Buttons/ButtonFrame';
import NavFrame from './components/Nav/NavFrame';
import MainFrame from './components/MainContent/MainFrame';
const styles= {
  mainAppStyling: {
    margin: 0,
    padding: 0,
    boxSizing: 'borderBox'
  }
}
class App extends Component {

  
  render() {
    return (
      <div className="App">
        <div className="container-fluid" style={styles.mainAppStyling}>

          <div className="row">
            <NavFrame />
            <MainFrame  />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
