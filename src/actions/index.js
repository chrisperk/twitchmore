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
