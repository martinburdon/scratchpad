import { connect } from 'react-redux';
import * as components from './components';
import { addNote, selectNote } from './actions';

export const NotesList = connect(
  function mapStateToProps(state) {
    return {
      notes: state.notes
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addNote: text => dispatch(addNote(text)),
      selectNote: id => dispatch(selectNote(id))
    };
  }
)(components.NotesList);

export const NoteArea = connect(
  function mapStateToProps(state) {
    const note = state.notes.filter(item => item.id === state.selectedNote);

    return {
      note: note[0]
    };
  }
)(components.NoteArea);
