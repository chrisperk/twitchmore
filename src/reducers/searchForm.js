import {combineReducers} from 'redux';
import {
  CHANGE_SEARCHTEXT,
  CHANGE_SEARCHCRITERIA
} from '../actions/index';

function searchCriteria(state = 'game', action) {
  if (action.type === CHANGE_SEARCHCRITERIA) {
    return action.criteria;
  }
  return state;
}

function searchText(state = '', action) {
  if (action.type === CHANGE_SEARCHTEXT) {
    return action.text;
  }
  return state;
}

function searchResults(state = []) {
  return state;
}

const contactForm = combineReducers({
  searchCriteria,
  searchText,
  searchResults
});

export default contactForm;
