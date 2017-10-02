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
        {[notes].map(n => (
          <li key={n.get('id')}>
            <Note note={n.toJS()} />
          </li>
        ))}
      </ul>
    </div>
  );
}
