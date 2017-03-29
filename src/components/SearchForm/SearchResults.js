import React, {PropTypes} from 'react';
import {
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import './SearchForm.css';

const SearchResults = props => {
  if (props.lastSearchCriteria === null) {
    return (
      <div>
        <p>No search made</p>
      </div>
    );
  }
  if (props.lastSearchCriteria === 'game') {
    return (
      <ListGroup className="search-results-list">
        {props.searchResults.map(stream => {
          return (
            <ListGroupItem
              className="search-result"
              key={stream.channel._id}
              onClick={event => props.handleSelectStream(stream, event)}
            >
              <div className="image-cropper">
                <img src={stream.preview.medium} alt="avatar" />
              </div>
              <p>{stream.channel.display_name}</p>
              <p>{stream.game}</p>
              <small>{stream.channel.status}</small>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
  if (props.lastSearchCriteria === 'streamer') {
    return (
      <ListGroup className="search-results-list">
        {props.searchResults.map(stream => {
          return (
            <ListGroupItem
              className="search-result"
              key={stream._id}
              onClick={event => props.handleSelectStream(stream, event)}
            >
              <div className="image-cropper">
                <img src={stream.video_banner} alt="avatar" />
              </div>
              <p>{stream.display_name}</p>
              <p>{stream.game}</p>
              <small>{stream.status}</small>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
};

SearchResults.propTypes = {
  searchCriteria: PropTypes.string.isRequired,
  searchResults: PropTypes.array,
  lastSearchCriteria: PropTypes.string,
  handleSelectStream: PropTypes.func
};

export default SearchResults;
