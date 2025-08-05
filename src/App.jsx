import "./App.css";
import { CirclePlus } from "lucide-react";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  return (
    <div className="w-screen h-screen bg-blue-50 flex justify-center">
      <div className="w-[560px] space-y-4">
        <div className="flex justify-center gap-20 mt-[20px] mb-[50px]">
          <h1 className="text-orange-400 text-[2em] text-center font-bold">
            React Note
          </h1>
          <CreateNote>
            <CirclePlus className="text-blue-400 size-9 hover:text-blue-500" />
          </CreateNote>
        </div>
        <ul>
          <Note />
        </ul>
      </div>
    </div>
  );
}

export default App;
