import { connect } from 'react-redux';
import * as components from './components';
import { addNote } from './actions';

export const NotesList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addNote: text => dispatch(addNote(text))
    };
  }
)(components.NotesList);
