import "./App.css";
import { CirclePlus } from "lucide-react";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function saveNote(noteId, noteDescription) {
    const newNotes = notes.map((note) => {
      if (note.id === noteId) {
        note.note = noteDescription;
      }
      return note;
    });

    setNotes(newNotes);
  }

  function getFormattedDate() {
    const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const agora = new Date();

    const diaSemana = diasSemana[agora.getDay()];
    const dia = agora.getDate();
    const mes = meses[agora.getMonth()];
    const ano = agora.getFullYear();

    let horas = agora.getHours();
    const minutos = agora.getMinutes().toString().padStart(2, "0");
    const periodo = horas >= 12 ? "PM" : "AM";

    if (horas > 12) horas -= 12;
    if (horas === 0) horas = 12;

    return `${diaSemana} ${dia} ${mes}, ${ano} às ${horas}:${minutos}${periodo}`;
  }

  function createNote() {
    const newNote = {
      id: Date.now(),
      date: getFormattedDate(),
      note: "",
      isCompleted: false,
    };
    setNotes([...notes, newNote]);
    return;
  }

  function noteCompleted(noteId) {
    const newNotes = notes.map((note) => {
      if (note.id === noteId) {
        note.isCompleted = !note.isCompleted;
      }
      return note;
    });
    setNotes(newNotes);
  }

  function deleteNote(noteId) {
    const newNotes = notes.filter((note) => note.id !== noteId);

    setNotes(newNotes);
  }

  return (
    <div className="w-screen h-screen bg-blue-50 flex justify-center">
      <div className="w-[560px] space-y-4">
        <div className="flex justify-center gap-20 mt-[20px] mb-[50px]">
          <h1
            className="text-orange-400 text-[2em] text-center font-bold"
            style={{ textShadow: "1px 1px 0px rgb(223, 182, 93)" }}
          >
            React Note
          </h1>
          <CreateNote createNote={createNote} notes={notes}>
            <CirclePlus className="text-blue-400 size-9 hover:text-blue-500" />
          </CreateNote>
        </div>
        {notes.map((note) => (
          <Note
            noteIsCompleted={note.isCompleted}
            noteCompleted={noteCompleted}
            saveNote={saveNote}
            noteId={note.id}
            deleteNote={deleteNote}
            key={note.id}
            date={note.date}
          >
            {note.note}
          </Note>
        ))}
      </div>
    </div>
  );
}

export default App;
