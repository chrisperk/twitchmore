import {connect} from 'react-redux';
import SearchForm from '../components/SearchForm/SearchForm';
import {
  changeSearchText,
  changeSearchCriteria
} from '../actions/index';

const mapStateToProps = state => {
  return {
    searchText: state.twitchmore.searchForm.searchText,
    searchCriteria: state.twitchmore.searchForm.searchCriteria
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleTextChange: value => {
      dispatch(changeSearchText(value));
    },
    handleCriteriaChange: criteria => {
      dispatch(changeSearchCriteria(criteria));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
