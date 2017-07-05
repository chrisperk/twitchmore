import { connect } from 'react-redux';
import MyNavbar from '../components/Navbar/Navbar';
import {
  changeSearchText,
  changeSearchCriteria,
  getSearchResultsStart,
  selectStream,
  revealChannelsList
} from '../actions/index';

const mapStateToProps = state => {
  return {
    searchText: state.twitchmore.searchForm.searchText,
    searchPlaceholder: state.twitchmore.searchForm.searchPlaceholder,
    searchCriteria: state.twitchmore.searchForm.searchCriteria,
    searchResults: state.twitchmore.searchForm.searchResults,
    currentResultsPosition: state.twitchmore.searchForm.currentResultsPosition,
    lastSearchCriteria: state.twitchmore.searchForm.lastSearchCriteria,
    hideChannelsList: state.twitchmore.activeChannelsList.hideList
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
    handleRevealChannelsList: () => {
      dispatch(revealChannelsList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyNavbar);
