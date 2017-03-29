import axios from 'axios';

export const CHANGE_SEARCHTEXT = 'CHANGE_SEARCHTEXT';

export function changeSearchText(text) {
  return {
    type: CHANGE_SEARCHTEXT,
    text
  };
}

export const CHANGE_SEARCHCRITERIA = 'CHANGE_SEARCHCRITERIA';

export function changeSearchCriteria(criteria) {
  return {
    type: CHANGE_SEARCHCRITERIA,
    criteria
  };
}

export const CHANGE_SEARCHPLACEHOLDER = 'CHANGE_PLACEHOLDER';

export function changePlaceholder(placeholder) {
  return {
    type: CHANGE_SEARCHPLACEHOLDER,
    placeholder
  };
}

export const LAST_SEARCHCRITERIA = 'LAST_SEARCHCRITERIA';

export function lastSearchCriteria(criteria) {
  return {
    type: LAST_SEARCHCRITERIA,
    criteria
  };
}

export const GET_SEARCHRESULTS_SUCCESS = 'GET_SEARCHRESULTS_SUCCESS';
export const GET_SEARCHRESULTS_ERROR = 'GET_SEARCHRESULTS_ERROR';
export const GET_SEARCHRESULTS_START = 'GET_SEARCHRESULTS_START';

export function getSearchResultsSuccess(results) {
  return {
    type: GET_SEARCHRESULTS_SUCCESS,
    results
  };
}

export function getSearchResultsError(message) {
  return {
    type: GET_SEARCHRESULTS_ERROR,
    message
  };
}

export const SELECT_STREAM = 'SELECT_STREAM';

export function selectStream(stream) {
  return {
    type: SELECT_STREAM,
    stream
  };
}

export const UNSELECT_STREAM = 'UNSELECT_STREAM';

export function unselectStream(activeChannel) {
  return {
    type: UNSELECT_STREAM,
    activeChannel
  };
}

export function getSearchResultsStart(event, criteria, searchText) {
  return (dispatch) => {
    event.preventDefault();
    console.log('hi');
    if (criteria === 'game') {
      dispatch(lastSearchCriteria(criteria));
      const requestHeaders = {
        headers: {
          Accept: 'application/vnd.twitchtv.v5+json',
          'Client-ID': 'v7mgsvgyfzdfvbm2p6wpgtxrpfyxbh'
        }
      };
      axios.get(`https://api.twitch.tv/kraken/search/streams?limit=10&query=${searchText}`, requestHeaders)
        .then(response => {
          console.log(response.data);
          console.log(response.data.streams);
          dispatch(getSearchResultsSuccess(response.data.streams));
        })
        .catch(error => {
          dispatch(getSearchResultsError(error));
        });
      dispatch({
        type: GET_SEARCHRESULTS_START
      });
    }
    if (criteria === 'streamer') {
      dispatch(lastSearchCriteria(criteria));
      const requestHeaders = {
        headers: {
          Accept: 'application/vnd.twitchtv.v5+json',
          'Client-ID': 'v7mgsvgyfzdfvbm2p6wpgtxrpfyxbh'
        }
      };
      axios.get(`https://api.twitch.tv/kraken/search/channels?limit=10&query=${searchText}`, requestHeaders)
        .then(response => {
          console.log(response.data);
          console.log(response.data.channels[0]);
          dispatch(getSearchResultsSuccess(response.data.channels));
        })
        .catch(error => {
          dispatch(getSearchResultsError(error));
        });
      dispatch({
        type: GET_SEARCHRESULTS_START
      });
    }
  };
}
