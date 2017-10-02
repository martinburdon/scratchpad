import { List, Map } from 'immutable';

const init = List([]);

export default function reducer(notes = init, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return notes.push(Map(action.payload));
    default:
      return notes;
  }
}
