import {combineReducers} from 'redux';

function items(state = []) {
  return state;
}

function activeAudioChannel(state = null) {
  return state;
}

const activeChannelsList = combineReducers({
  items,
  activeAudioChannel
});

export default activeChannelsList;
