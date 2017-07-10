import React, {PropTypes} from 'react';
import {
  Col,
  Row,
  Button
} from 'react-bootstrap';
import './SearchResults.css';

const SearchResults = props => {
  if (props.lastSearchCriteria === 'game') {
    return (
      <Col
        sm={props.isChannelsListDisplayed ? 12 : 10}
        className={props.showSearchResults ? '' : 'hidden'}
      >
        <Row className="search-results-list">
          <Col xs={2} sm={1} className="cursor-button">
            <Button
              id="prev-ten-button"
              className="search-results-button"
              disabled={props.currentResultsPosition === 0}
              onClick={
                (event) => props.handlePrevTen(
                  event, props.searchCriteria, props.searchText, props.currentResultsPosition
                )
              }
            >
              <i className="fa fa-chevron-left fa-3x" />
            </Button>
          </Col>
          {props.searchResults.map(stream => {
            return (
              <Col
                xs={2}
                sm={1}
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
          <Col xs={2} sm={1} className="cursor-button pull-right">
            <Button
              id="next-ten-button"
              className="search-results-button"
              onClick={
                (event) => props.handleNextTen(
                  event, props.searchCriteria, props.searchText, props.currentResultsPosition
                )
              }
            >
              <i className="fa fa-chevron-right fa-3x" />
            </Button>
          </Col>
          <Col xs={2} xsOffset={3} sm={2} smOffset={4}>
            <Button id="hide-results-button" onClick={
              () => {
                props.handleHideSearchResults();
              }
            }>
              Hide Search Results
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
  if (props.lastSearchCriteria === 'streamer') {
    return (
      <Col
        sm={props.isChannelsListDisplayed ? 12 : 10}
        className={props.showSearchResults ? '' : 'hidden'}
      >
        <Row className="search-results-list">
          <Col xs={2} sm={1} className="cursor-button">
            <Button
              id="prev-ten-button"
              className="search-results-button"
              disabled={props.currentResultsPosition === 0}
              onClick={
                (event) => props.handlePrevTen(
                  event, props.searchCriteria, props.searchText, props.currentResultsPosition
                )
              }
            >
              <i className="fa fa-chevron-left fa-3x" />
            </Button>
          </Col>
          {props.searchResults.map(stream => {
            return (
              <Col
                xs={2}
                sm={1}
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
          <Col xs={2} sm={1} className="cursor-button pull-right">
            <Button
              id="next-ten-button"
              className="search-results-button"
              onClick={
                (event) => props.handleNextTen(
                  event, props.searchCriteria, props.searchText, props.currentResultsPosition
                )
              }
            >
              <i className="fa fa-chevron-right fa-3x" />
            </Button>
          </Col>
          <Col xs={2} xsOffset={3} sm={2} smOffset={5}>
            <Button id="hide-results-button" onClick={
              () => props.handleHideSearchResults()}
            >
              Hide Search Results
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
  return null;
};

SearchResults.propTypes = {
  searchResults: PropTypes.array,
  searchText: PropTypes.string,
  searchCriteria: PropTypes.string,
  lastSearchCriteria: PropTypes.string,
  currentResultsPosition: PropTypes.number,
  handleSelectStream: PropTypes.func,
  handlePrevTen: PropTypes.func,
  handleNextTen: PropTypes.func,
  showSearchResults: PropTypes.bool,
  handleHideSearchResults: PropTypes.func,
  isChannelsListDisplayed: PropTypes.bool
};

export default SearchResults;
