import React, {PropTypes} from 'react';
import {
  Row,
  Col,
  Button,
  FormControl,
  FormGroup,
  ControlLabel
} from 'react-bootstrap';
import axios from 'axios';

function handleSearchSubmit(event, criteria, searchText) {
  event.preventDefault();
  console.log('hi');
  if (criteria === 'game') {
    const requestHeaders = {
      headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'v7mgsvgyfzdfvbm2p6wpgtxrpfyxbh'
      }
    };
    axios.get(`https://api.twitch.tv/kraken/search/streams?query=${searchText}`, requestHeaders)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

const SearchForm = props => {
  return (
    <Row>
      <Col md={6}>
        <form onSubmit={event => handleSearchSubmit(event, props.searchCriteria, props.searchText)}>
          <FormGroup>
            <ControlLabel>Search by: </ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="Game"
              value={props.searchCriteria}
              onChange={event => props.handleCriteriaChange(event.target.value)}
            >
              <option value="game">Game</option>
              <option value="streamer">Streamer</option>
              <option value="description">Description</option>
            </FormControl>
          </FormGroup>
          <FormControl
            type="text"
            value={props.searchText}
            placeholder="Enter search keywords"
            onChange={event => props.handleTextChange(event.target.value)}
          />
          <Button type="submit" bsStyle="success">Search</Button>
        </form>
      </Col>
    </Row>
  );
};

SearchForm.propTypes = {
  searchCriteria: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  handleCriteriaChange: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default SearchForm;
