import {combineReducers} from 'redux';
import searchForm from './searchForm';
import activeChannelsList from './activeChannelsList';

function user(state = null) {
  return state;
}

const twitchmore = combineReducers({
  user,
  searchForm,
  activeChannelsList
});

export default twitchmore;
