import {combineReducers} from 'redux';
import {
  CHANGE_SEARCHTEXT,
  CHANGE_SEARCHCRITERIA,
  LAST_SEARCHCRITERIA,
  GET_SEARCHRESULTS_START,
  GET_SEARCHRESULTS_SUCCESS,
  GET_SEARCHRESULTS_ERROR
} from '../actions/index';

function searchCriteria(state = 'game', action) {
  if (action.type === CHANGE_SEARCHCRITERIA) {
    return action.criteria;
  }
  return state;
}

function searchPlaceholder(state = 'Enter game', action) {
  if (action.type === CHANGE_SEARCHCRITERIA) {
    switch (action.criteria) {
      case 'game':
        return 'Enter game';
      case 'streamer':
        return 'Enter streamer';
      case 'description':
        return 'Enter description';
      default:
        return 'Enter game';
    }
  }
  return state;
}

function searchText(state = '', action) {
  if (action.type === CHANGE_SEARCHTEXT) {
    return action.text;
  }
  return state;
}

function searchResults(state = [], action) {
  if (action.type === GET_SEARCHRESULTS_START) {
    return [];
  }
  if (action.type === GET_SEARCHRESULTS_SUCCESS) {
    return action.results;
  }
  if (action.type === GET_SEARCHRESULTS_ERROR) {
    return action.message;
  }
  return state;
}

function currentResultsPosition(state = null) {
  return state;
}

function lastSearchCriteria(state = null, action) {
  if (action.type === LAST_SEARCHCRITERIA) {
    return action.criteria;
  }
  return state;
}

const contactForm = combineReducers({
  searchCriteria,
  searchPlaceholder,
  searchText,
  searchResults,
  currentResultsPosition,
  lastSearchCriteria
});

export default contactForm;
