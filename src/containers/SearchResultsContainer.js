import {connect} from 'react-redux';
import SearchResults from '../components/SearchResults/SearchResults';
import {
  changeSearchText,
  changeSearchCriteria,
  getSearchResultsStart,
  selectStream,
  getPrevTenResults,
  getNextTenResults,
  hideSearchResults
} from '../actions/index';

const mapStateToProps = state => {
  return {
    searchText: state.twitchmore.searchForm.searchText,
    searchPlaceholder: state.twitchmore.searchForm.searchPlaceholder,
    searchCriteria: state.twitchmore.searchForm.searchCriteria,
    isSearching: state.twitchmore.searchForm.searching,
    searchResults: state.twitchmore.searchForm.searchResults,
    lastSearchCriteria: state.twitchmore.searchForm.lastSearchCriteria,
    currentResultsPosition: state.twitchmore.searchForm.currentResultsPosition,
    showSearchResults: state.twitchmore.searchForm.showSearchResults,
    isChannelsListDisplayed: state.twitchmore.activeChannelsList.hideList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleTextChange: value => {
      dispatch(changeSearchText(value));
    },
    handleCriteriaChange: criteria => {
      dispatch(changeSearchCriteria(criteria));
    },
    handleSearchSubmit: (event, criteria, text, currentResultsPosition) => {
      dispatch(getSearchResultsStart(event, criteria, text, currentResultsPosition));
    },
    handleSelectStream: stream => {
      dispatch(selectStream(stream));
    },
    handlePrevTen: (event, criteria, searchText, currentResultsPosition) => {
      dispatch(getPrevTenResults(event, criteria, searchText, currentResultsPosition));
    },
    handleNextTen: (event, criteria, searchText, currentResultsPosition) => {
      dispatch(getNextTenResults(event, criteria, searchText, currentResultsPosition));
    },
    handleHideSearchResults: () => {
      dispatch(hideSearchResults());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
