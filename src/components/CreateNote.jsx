function CreateNote({ children, createNote }) {
  return <button onClick={() => createNote()}>{children}</button>;
}

export default CreateNote;
