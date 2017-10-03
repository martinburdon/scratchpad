import React from 'react';

export function Note(props) {
  const { note } = props;
  return <span>{note.text}</span>;
}

export function NotesList(props) {
  const { notes, addNote } = props;

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
    <div className='note'>
      <input type='text'
        placeholder='Add note'
        onKeyDown={onSubmit} />
      <ul>
        {notes.map(t => (
          <li key={t.get('id')}>
            <Note note={t.toJS()} />
          </li>
        ))}
      </ul>
    </div>
  );
}
