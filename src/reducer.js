import { combineReducers } from 'redux';

// const init = {
//   notes: [{ id: 0, text: 'test' }],
//   selectedIndex: false
// };

// export default function reducer(state = init, action) {
//   switch (action.type) {
//     case 'ADD_NOTE':
//       return Object.assign({}, state, {
//         notes: [
//           ...state.notes,
//           {
//             id: action.id,
//             text: action.text
//           }
//         ]
//       })
//     case 'UPDATE_SELECTED':
//       return Object.assign({}, state, {
//         selectedIndex: action.selected
//       })
//     default:
//       return state;
//   }
// }


function selectedNote(state = false, action) {
  console.log('hi ', action);
  switch (action.type) {
    case 'SELECT_NOTE':
      return action.id
    default:
      return state
  }
}

function notes(state = [{ id: 0, text: 'sdfsdf' }], action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state
  }
}

const notesApp = combineReducers({
  selectedNote,
  notes
});

export default notesApp;
