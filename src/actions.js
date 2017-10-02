const uid = () => Math.random().toString(34).slice(2);

export function addNote(text) {
  return {
    type: 'ADD_NOTE',
    payload: {
      id: uid(),
      text: text
    }
  };
}
