import { Trash2, Check } from "lucide-react";
import ChangeColor from "./ChangeColor";
import { useState, useEffect } from "react";

function Note({ noteId, date, deleteNote, children, saveNote }) {
  const [note, setNote] = useState(children);

  useEffect(() => {
    saveNote(noteId, note);
  }, [note]);

  return (
    <ul>
      <li className="bg-neutral-50 w-[560px] min-h-[340px] rounded-[1px] shadow-[1px_1px_4px_0px_rgb(136,136,136)]">
        <div className="w-full h-10 bg-neutral-200 rounded-t-[1px] p-2 flex items-center justify-between">
          <span className="text-blue-400 italic text-xs ml-2">{date}</span>
          <div className="flex gap-2 mr-2 items-center ">
            <ChangeColor />
            <button>
              <Check className="text-green-600" />
            </button>
            <button
              onClick={() => {
                deleteNote(noteId);
              }}
            >
              <Trash2 className="text-red-600" />
            </button>
          </div>
        </div>
        <div
          onInput={(e) => setNote(e.currentTarget.innerText)}
          contentEditable="true"
          className="w-full  min-h-[300px] rounded-b-[1px] bg-neutral-50 p-5"
        >
          {note}
        </div>
      </li>
    </ul>
  );
}

export default Note;
