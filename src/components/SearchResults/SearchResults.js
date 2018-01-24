import React, {PropTypes} from 'react';
import {
  Col,
  Row,
  Button,
  Tooltip,
  OverlayTrigger
} from 'react-bootstrap';
import './SearchResults.css';

const nextTenTooltip = (
  <Tooltip id="next-ten-tooltip">
    Next Ten Results
  </Tooltip>
);

const prevTenTooltip = (
  <Tooltip id="prev-ten-tooltip">
    Previous Ten Results
  </Tooltip>
);

const SearchResults = props => {
  if (props.lastSearchCriteria === 'game') {
    return (
      <Col
        sm={props.isChannelsListDisplayed ? 12 : 10}
        id="search-result-wrapper"
        className={
          props.showSearchResults ?
            'show-results' :
            ''
        }
      >
        <Row className="search-results-list">
          <Col xs={2} sm={1} className="prev-cursor-button">
            <OverlayTrigger
              placement="top"
              overlay={prevTenTooltip}
            >
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
            </OverlayTrigger>
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
          <Col xs={2} sm={1} className="next-cursor-button pull-right">
            <OverlayTrigger
              placement="top"
              overlay={nextTenTooltip}
            >
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
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={2} smOffset={4} className="hide-results-wrapper">
            <Button id="hide-results-button" bsStyle="info" onClick={
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
          <Col xs={2} sm={1} className="prev-cursor-button">
            <OverlayTrigger
              placement="top"
              overlay={prevTenTooltip}
            >
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
            </OverlayTrigger>
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
          <Col xs={2} sm={1} className="next-cursor-button pull-right">
            <OverlayTrigger
              placement="top"
              overlay={nextTenTooltip}
            >
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
            </OverlayTrigger>
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
