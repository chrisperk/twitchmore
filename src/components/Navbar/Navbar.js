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
      </Navbar.Header>
      <Navbar.Form pullLeft>
        <form className="search-form" onSubmit={
          event => props.handleSearchSubmit(event, props.searchCriteria, props.searchText)
        }>
          <FormGroup>
            <ControlLabel>Search by:&nbsp;</ControlLabel>
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
          <FormControl
            type="text"
            value={props.searchText}
            placeholder={props.searchPlaceholder}
            onChange={event => props.handleTextChange(event.target.value)}
          />
          <Button type="submit" bsStyle="primary">Submit</Button>
        </form>
      </Navbar.Form>
    </Navbar>
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
};

export default MyNavbar;
