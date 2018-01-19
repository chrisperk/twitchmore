import {combineReducers} from 'redux';
import {
  SELECT_STREAM,
  UNSELECT_STREAM,
  HIDE_CHANNELS_LIST,
  REVEAL_CHANNELS_LIST
} from '../actions/index';

function items(state = [], action) {
  if (action.type === SELECT_STREAM) {
    const newStream = [action.stream];
    let newState;

    let duplicateCheck = false;

    for (let i = 0; i < state.length; i++) {
      if (state[i]._id === newStream[0]._id) {
        duplicateCheck = true;
      }
    }

    if (!duplicateCheck) {
      if (state.length < 4) {
        newState = state.concat(newStream);
        return newState;
      }

      if (state.length === 4) {
        newState = state.filter(stream => state.indexOf(stream) !== 3);
        newState = newState.concat(newStream);
        return newState;
      }
    }
  }

  if (action.type === UNSELECT_STREAM) {
    const newState = state.filter(channel => channel._id !== action.activeChannel._id);
    return newState;
  }

  return state;
}

function activeAudioChannel(state = null) {
  return state;
}

function hideList(state = true, action) {
  if (action.type === SELECT_STREAM) {
    return false;
  }

  if (action.type === UNSELECT_STREAM) {
    if (action.activeChannels.length === 1) {
      return true;
    }
  }

  if (action.type === HIDE_CHANNELS_LIST) {
    return true;
  }

  if (action.type === REVEAL_CHANNELS_LIST) {
    return false;
  }

  return state;
}

const activeChannelsList = combineReducers({
  items,
  activeAudioChannel,
  hideList
});

export default activeChannelsList;
