import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './App.css';
import SearchFormContainer from './containers/SearchFormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <SearchFormContainer />
        </Grid>
      </div>
    );
  }
}

export default App;
