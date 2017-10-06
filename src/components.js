import React from 'react';

// Individual Note
export function Note(props) {
  const { id, text, list, onClick, updateNote } = props;
  const onKeyUp = (event) => {
    const content = document.getElementById('temp').textContent;
    updateNote(id, content);
  };

  if (list) {
    return <li onClick={onClick}>{text}</li>
  }

  return <div id="temp" contentEditable onKeyUp={onKeyUp}>{text}</div>
}

// List of Notes
export function NotesList(props) {
  const { notes, addNote, selectNote } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = '';
      addNote(text);
    }
  };

  return (
    <notes-list>
      <input type='text' placeholder='Add note' onKeyDown={onSubmit} />
      <ul>
        {notes.map((note) => (
          <Note list="true" key={note.id} {...note} onClick={() => selectNote(note.id)} />
        ))}
      </ul>
    </notes-list>
  );
}

export function NoteArea(props) {
  const { note = false, updateNote } = props;
  return (
    <note-area>
      {
        note ? <Note key={note.id} {...note} updateNote={updateNote} /> : 'Please select a note'
      }
    </note-area>
  );
}
