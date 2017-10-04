import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { NotesList, NoteArea } from './containers';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <div>
      <NotesList />
      <NoteArea />
    </div>
  </Provider>,
  document.getElementById('app')
);
