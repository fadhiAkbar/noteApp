import { useState } from "react";
import Navbar from "./components/Navbar";
import NoteItem from "./components/NoteItem";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <>
      <Navbar />
      <Notes notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;
