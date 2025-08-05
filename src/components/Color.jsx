function Color({ noteId, color, changeColorNote, shadowColor }) {
  return (
    <button
      onClick={() => changeColorNote(noteId, color, shadowColor)}
      className={`w-[60px] h-[60px] shadow-[1px_1px_4px_0px_rgb(136,136,136)] ${color}`}
    ></button>
  );
}

export default Color;
