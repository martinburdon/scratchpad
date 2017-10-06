import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { NotesList, NoteArea } from './containers';

const defaultState = {
  notes: [{ id: 0, text: 'sdfsdf' }],
  selectedNote: false
};

const store = createStore(reducer, defaultState);

render(
  <Provider store={store}>
    <scratchpad-container>
      <NotesList />
      <NoteArea />
    </scratchpad-container>
  </Provider>,
  document.getElementById('app')
);
