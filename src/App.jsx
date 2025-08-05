import "./App.css";
import { CirclePlus } from "lucide-react";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const colors = {
    neutral: { color: "bg-neutral-50", shadowColor: "bg-neutral-200" },
    orange: { color: "bg-orange-200", shadowColor: "bg-orange-300" },
    purple: { color: "bg-purple-200", shadowColor: "bg-purple-300" },
    pink: { color: "bg-pink-200", shadowColor: "bg-pink-300" },
    red: { color: "bg-red-200", shadowColor: "bg-red-300" },
    yellow: { color: "bg-yellow-100", shadowColor: "bg-yellow-400" },
    blue: { color: "bg-blue-200", shadowColor: "bg-blue-300" },
    green: { color: "bg-green-200", shadowColor: "bg-green-300" },
  };

  function changeColorNote(noteId, color, shadowColor) {
    const newNotes = notes.map((note) => {
      if (note.id === noteId) {
        note.color = color;
        note.shadowColor = shadowColor;
      }
      return note;
    });
    setNotes(newNotes);
  }

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
      color: colors.neutral.color,
      shadowColor: colors.neutral.shadowColor,
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
    if (confirm("Tem certeza que deseja remover essa nota?")) {
      const newNotes = notes.filter((note) => note.id !== noteId);

      setNotes(newNotes);
    }
    return;
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
            shadowColor={note.shadowColor}
            color={note.color}
            changeColorNote={changeColorNote}
            colors={colors}
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
