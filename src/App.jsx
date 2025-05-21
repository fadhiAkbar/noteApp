import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NoteItem from "./components/NoteItem";
import Notes from "./components/Notes";

function App() {
  const loadNotes = () => JSON.parse(localStorage.getItem("notes") || []);
  const [notes, setNotes] = useState(loadNotes);
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    setFilteredNotes(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredNotes(notes);
    } else {
      setFilteredNotes(
        notes.filter((note) =>
          note.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Notes notes={filteredNotes} setNotes={setNotes} />
    </>
  );
}

export default App;
