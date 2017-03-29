import {connect} from 'react-redux';
import SearchForm from '../components/SearchForm/SearchForm';
import {
  changeSearchText,
  changeSearchCriteria,
  getSearchResultsStart,
  selectStream
} from '../actions/index';

const mapStateToProps = state => {
  return {
    searchText: state.twitchmore.searchForm.searchText,
    searchPlaceholder: state.twitchmore.searchForm.searchPlaceholder,
    searchCriteria: state.twitchmore.searchForm.searchCriteria,
    searchResults: state.twitchmore.searchForm.searchResults,
    lastSearchCriteria: state.twitchmore.searchForm.lastSearchCriteria
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
    handleSearchSubmit: (event, criteria, text) => {
      dispatch(getSearchResultsStart(event, criteria, text));
    },
    handleSelectStream: stream => {
      dispatch(selectStream(stream));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
