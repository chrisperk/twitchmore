import React, { Component } from 'react';
import {
  Row,
  Grid
} from 'react-bootstrap';
import './App.css';
import SearchFormContainer from './containers/SearchFormContainer';
import ActiveChannelsListContainer from './containers/ActiveChannelsListContainer';
import ChannelDisplaySpaceContainer from './containers/ChannelDisplaySpaceContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid className="app-grid" fluid>
          <Row>
            <SearchFormContainer className="search-form" />
            <ActiveChannelsListContainer className="active-channels-list" />
            <ChannelDisplaySpaceContainer className="channel-dispay-space" />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
