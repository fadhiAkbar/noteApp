import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

const Notes = ({ notes, setNotes, onSearchQuery }) => {
  const addNote = (title, content) => {
    // data baru
    const newNote = {
      id: new Date().getTime(),
      title: title,
      content: content,
      archive: false,
      createAt: new Date().toISOString(),
    };

    setNotes([...notes, newNote]);
  };

  // hapus catatan
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Archived catatan
  const handleArchived = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archive: !note.archive } : note
      )
    );
  };

  // filter note
  const filtered = notes.filter((note) =>
    note.title.toLowerCase().includes(onSearchQuery.toLowerCase())
  );
  const activeNotes = filtered.filter((note) => note.archive === false);
  const archivedNotes = filtered.filter((note) => note.archive === true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <NoteForm onAddNote={addNote} />
      <NoteList
        title="Active"
        notes={activeNotes}
        onDelete={handleDelete}
        onArchived={handleArchived}
      />
      <NoteList
        title="Archive"
        notes={archivedNotes}
        onDelete={handleDelete}
        onArchived={handleArchived}
      />
    </div>
  );
};

export default Notes;
