import React, {PropTypes} from 'react';
import SearchResults from './SearchResults';
import {
  Col,
  Button,
  FormControl,
  FormGroup,
  ControlLabel
} from 'react-bootstrap';
import './SearchForm.css';

const SearchForm = props => {
  return (
    <Col className="search-component" md={2}>
      <form className="search-form" onSubmit={
        event => props.handleSearchSubmit(event, props.searchCriteria, props.searchText)
      }>
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
          </FormControl>
        </FormGroup>
        <FormControl
          type="text"
          value={props.searchText}
          placeholder={props.searchPlaceholder}
          onChange={event => props.handleTextChange(event.target.value)}
        />
        <Button type="submit" bsStyle="success">Search</Button>
      </form>
      <SearchResults
        searchResults={props.searchResults}
        searchCriteria={props.searchCriteria}
        lastSearchCriteria={props.lastSearchCriteria}
        handleSelectStream={props.handleSelectStream}
      />
    </Col>
  );
};

SearchForm.propTypes = {
  searchCriteria: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  searchResults: PropTypes.array,
  lastSearchCriteria: PropTypes.string,
  handleCriteriaChange: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  handleSelectStream: PropTypes.func
};

export default SearchForm;
