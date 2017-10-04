const uid = () => Math.random().toString(34).slice(2);

export function addNote(text) {
  return {
    type: 'ADD_NOTE',
    id: uid(),
    text: text
  };
}

export function selectNote(id) {
  console.log(id);
  return {
    type: 'SELECT_NOTE',
    id
  };
}
