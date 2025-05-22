import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NoteItem from "./components/NoteItem";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isInitialized && typeof window !== "undefined") {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes, isInitialized]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedNotes = localStorage.getItem("notes");
        if (storedNotes) {
          setNotes(JSON.parse(storedNotes));
        }
      } catch (error) {
        console.error("Failed to parse notes from localStorage", error);
      }
      setIsInitialized(true);
    }
  }, []);

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Notes notes={notes} setNotes={setNotes} onSearchQuery={query} />
    </>
  );
}

export default App;
