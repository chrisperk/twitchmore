import React, { Component } from 'react';
import {
  Row,
  Grid
} from 'react-bootstrap';
import './App.css';
import SearchResultsContainer from './containers/SearchResultsContainer';
import ActiveChannelsListContainer from './containers/ActiveChannelsListContainer';
import ChannelDisplaySpaceContainer from './containers/ChannelDisplaySpaceContainer';
import NavbarContainer from './containers/NavbarContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Grid className="app-grid" fluid>
          <Row>
            <SearchResultsContainer className="search-form" />
            <ActiveChannelsListContainer className="active-channels-list" />
            <ChannelDisplaySpaceContainer className="channel-dispay-space" />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
