import { Trash2, Check } from "lucide-react";
import { useState, useEffect } from "react";
import ChangeColor from "./ChangeColor";

function Note({
  noteId,
  date,
  deleteNote,
  children,
  saveNote,
  noteCompleted,
  noteIsCompleted,
}) {
  const [note, setNote] = useState(children);
  const [changeColor, setchangeColor] = useState(false);

  const [firstNote, setFirstNote] = useState("");

  function switchChangeColorState() {
    const newChangeColorState = !changeColor;

    setchangeColor(newChangeColorState);
  }

  useEffect(() => {
    setFirstNote(note);
  }, []);

  useEffect(() => {
    saveNote(noteId, note);
  }, [note]);

  return (
    <ul>
      <li
        className={`w-[560px] min-h-[340px] flex flex-row ${
          noteIsCompleted ? "opacity-50" : ""
        }`}
      >
        <div className="bg-neutral-50 min-w-[560px] min-h-[340px] rounded-[1px] shadow-[1px_1px_4px_0px_rgb(136,136,136)]">
          <div className="w-full h-10 bg-neutral-200 rounded-t-[1px] p-2 flex items-center justify-between">
            <span className="text-blue-400 italic text-xs ml-2">{date}</span>
            <div className="flex gap-2 mr-2 items-center ">
              <button
                onClick={() => switchChangeColorState()}
                className="h-5 w-5 bg-neutral-50 border-neutral-500 border-[2px] shadow-md"
              ></button>
              <button onClick={() => noteCompleted(noteId)}>
                <Check className="text-green-600 hover:text-green-700" />
              </button>
              <button onClick={() => deleteNote(noteId)}>
                <Trash2 className="text-red-600 hover:text-red-900" />
              </button>
            </div>
          </div>
          <div
            onInput={(e) => setNote(e.currentTarget.innerText)}
            contentEditable="true"
            className="w-full  min-h-[300px] rounded-b-[1px] bg-neutral-50 p-5"
          >
            {firstNote}
          </div>
        </div>
        {changeColor ? <ChangeColor /> : ""}
      </li>
    </ul>
  );
}

export default Note;
