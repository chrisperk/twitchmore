import React, { PropTypes } from 'react';
import {
  Navbar,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
 } from 'react-bootstrap';
import './Navbar.css';

const MyNavbar = props => {
  return (
    <Navbar id="my-navbar" fluid>
      <Navbar.Header>
        <Navbar.Brand pullLeft>
          <a href="#">TwitchMore</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullLeft>
          <form className="search-form" onSubmit={
            event => props.handleSearchSubmit(
              event, props.searchCriteria, props.searchText, 0
            )
          }>
            <FormGroup>
              <ControlLabel>Search for:&nbsp;</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="Game"
                value={props.searchCriteria}
                onChange={event => props.handleCriteriaChange(event.target.value)}
              >
                <option value="game">Game</option>
                <option value="streamer">Streamer</option>
              </FormControl>
            </FormGroup>
            <FormGroup className="margin-top-1px">
              <FormControl
                type="text"
                className="margin-left-5px hidden-xs"
                value={props.searchText}
                placeholder={props.searchPlaceholder}
                onChange={event => props.handleTextChange(event.target.value)}
              />
              <FormControl
                type="text"
                className="visible-xs-block"
                value={props.searchText}
                placeholder={props.searchPlaceholder}
                onChange={event => props.handleTextChange(event.target.value)}
              />
              <Button
                type="submit"
                bsStyle="primary"
                className="margin-left-1px margin-top-5px"
                disabled={props.searchText.length === 0}
              >
                Search
              </Button>
            </FormGroup>
          </form>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
      // <div className="pull-right mid-align">
      //   <Button
      //     id="show-active-channels-button"
      //     className="pull-right"
      //     type="button"
      //     bsStyle="info"
      //     style={{
      //       display: props.hideChannelsList && props.activeChannels.length > 0 ? 'block' : 'none'
      //     }}
      //     onClick={event => props.handleRevealChannelsList(event)}
      //   >
      //     Show Active Channels
      //   </Button>
      // </div>

  );
};

MyNavbar.propTypes = {
  searchCriteria: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  searchResults: PropTypes.array,
  lastSearchCriteria: PropTypes.string,
  handleCriteriaChange: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  currentResultsPosition: PropTypes.number,
  handleRevealChannelsList: PropTypes.func,
  hideChannelsList: PropTypes.bool,
  activeChannels: PropTypes.array
};

export default MyNavbar;
