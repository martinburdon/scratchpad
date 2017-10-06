import { combineReducers } from 'redux';

function selectedNote(state = false, action) {
  switch (action.type) {
    case 'SELECT_NOTE':
      return action.id
    default:
      return state
  }
}

function notes(state = [], action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case 'UPDATE_NOTE':
      return state.map(item => {
        if (item.id !== action.id) {
          return item;
        }

        return Object.assign(item, { text: action.text})
      });
    default:
      return state
  }
}

const notesApp = combineReducers({
  selectedNote,
  notes
});

export default notesApp;
