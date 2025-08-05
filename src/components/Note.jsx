import { Trash2, Check } from "lucide-react";
import ChangeColor from "./ChangeColor";

function Note() {
  return (
    <li className="bg-neutral-50 w-[560px] min-h-[340px] rounded-[1px] shadow-[1px_1px_4px_0px_rgb(136,136,136)]">
      <div className="w-full h-10 bg-neutral-200 rounded-t-[1px] p-2 flex items-center justify-between">
        <span className="text-blue-400 italic text-xs ml-2">
          Seg 4 Agosto, 2025 as 18:56PM
        </span>
        <div className="flex gap-2 mr-2 items-center ">
          <ChangeColor />
          <button>
            <Check className="text-green-600" />
          </button>
          <button>
            <Trash2 className="text-red-600" />
          </button>
        </div>
      </div>
      <div
        contentEditable="true"
        className="w-full  min-h-[300px] rounded-b-[1px] bg-neutral-50 p-5"
      ></div>
    </li>
  );
}

export default Note;
