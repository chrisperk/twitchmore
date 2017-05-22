import React, {PropTypes} from 'react';
import {
  Col,
  Row
} from 'react-bootstrap';
import './SearchResults.css';

const SearchResults = props => {
  if (props.lastSearchCriteria === 'game') {
    return (
      <Col md={10}>
        <Row className="search-results-list">
          {props.searchResults.map(stream => {
            return (
              <Col md={1}
                className="search-result"
                key={stream.channel._id}
                onClick={event => props.handleSelectStream(stream, event)}
              >
                <div className="image-cropper">
                  <img src={stream.preview.medium} alt="avatar" />
                </div>
                <p>{stream.channel.display_name}</p>
                <p>{stream.game}</p>
              </Col>
            );
          })}
        </Row>
      </Col>
    );
  }
  if (props.lastSearchCriteria === 'streamer') {
    return (
      <Col md={10}>
        <Row className="search-results-list">
          {props.searchResults.map(stream => {
            return (
              <Col md={1}
                className="search-result"
                key={stream._id}
                onClick={event => props.handleSelectStream(stream, event)}
              >
                <div className="image-cropper">
                  <img src={stream.video_banner} alt="avatar" />
                </div>
                <p>{stream.display_name}</p>
                <p>{stream.game}</p>
              </Col>
            );
          })}
        </Row>
      </Col>
    );
  }
  return null;
};

SearchResults.propTypes = {
  searchResults: PropTypes.array,
  lastSearchCriteria: PropTypes.string,
  handleSelectStream: PropTypes.func
};

export default SearchResults;
