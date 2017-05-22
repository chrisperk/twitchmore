import {combineReducers} from 'redux';
import {
  SELECT_STREAM,
  UNSELECT_STREAM
} from '../actions/index';

function items(state = [], action) {
  if (action.type === SELECT_STREAM) {
    console.log(state);
    const newStream = [action.stream];
    let newState;

    if (state.length < 4) {
      newState = state.concat(newStream);
    }

    if (state.length === 4) {
      newState = state.filter(stream => state.indexOf(stream) !== 3);
      newState = newState.concat(newStream);
    }

    console.log(newState);
    return newState;
  }
  if (action.type === UNSELECT_STREAM) {
    console.log(state);
    console.log(action.activeChannel._id);
    const newState = state.filter(channel => channel._id !== action.activeChannel._id);
    return newState;
  }
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
