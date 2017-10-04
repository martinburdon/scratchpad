import React from 'react';

// Individual Note
export function Note(props) {
  const { text, onClick } = props;
  return <li onClick={onClick}>{text}</li>;
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
    <div>
      <input type='text'
        placeholder='Add note'
        onKeyDown={onSubmit} />
      <ul>
        {notes.map((note) => (
          <Note key={note.id} {...note} onClick={() => selectNote(note.id)} />
        ))}
      </ul>
    </div>
  );
}

export function NoteArea(props) {
  const { note = false } = props;
  return (
    <div>
      {
        note ? <Note key={note.id} {...note} /> : 'Please select a note'
      }
    </div>
  );
}
