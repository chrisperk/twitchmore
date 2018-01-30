import React, {PropTypes} from 'react';
import {
  Col,
  Row,
  Button
} from 'react-bootstrap';
import './SearchResults.css';

// const nextTenTooltip = (
//   <Tooltip id="next-ten-tooltip">
//     Next Ten Results
//   </Tooltip>
// );
//
// const prevTenTooltip = (
//   <Tooltip id="prev-ten-tooltip">
//     Previous Ten Results
//   </Tooltip>
// );

const SearchResults = props => {
  if (props.lastSearchCriteria === 'game') {
    return (
      <div>
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
              <Button
                id="prev-ten-button"
                title="Previous Ten Results"
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
                  <h3>{stream.channel.display_name}</h3>
                  <p>{stream.game}</p>
                </Col>
              );
            })}
            <Col xs={2} sm={1} className="next-cursor-button pull-right">
              <Button
                id="next-ten-button"
                title="Next Ten Results"
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
          </Row>
        </Col>
        <Col
          xs={12}
          sm={2}
          smOffset={4}
          className={props.showSearchResults ? 'hide-results-wrapper show' : 'hide-results-wrapper'}
        >
          <Button id="hide-results-button" bsStyle="info" onClick={
            () => {
              props.handleHideSearchResults();
            }
          }>
            Hide Search Results
          </Button>
        </Col>
      </div>
    );
  }
  if (props.lastSearchCriteria === 'streamer') {
    return (
      <div>
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
              <Button
                id="prev-ten-button"
                title="Previous Ten Results"
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
                    <img src={stream.video_banner || stream.logo} alt="avatar" />
                  </div>
                  <h3>{stream.display_name}</h3>
                  <p>{stream.game}</p>
                </Col>
              );
            })}
            <Col xs={2} sm={1} className="next-cursor-button pull-right">
              <Button
                id="next-ten-button"
                title="Next Ten Results"S
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
          </Row>
        </Col>
        <Col
          xs={12}
          sm={2}
          smOffset={4}
          className={props.showSearchResults ? 'hide-results-wrapper show' : 'hide-results-wrapper'}
        >
          <Button id="hide-results-button" bsStyle="info" onClick={
            () => {
              props.handleHideSearchResults();
            }
          }>
            Hide Search Results
          </Button>
        </Col>
      </div>
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
