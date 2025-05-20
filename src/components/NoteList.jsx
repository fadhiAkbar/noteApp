import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ title, notes, onDelete, onArchived }) => {
  return (
    <section className="container py-8">
      <h2 className="inline-flex items-center gap-2 text-2xl font-medium mb-6">
        {title === "Active" ? (
          <img src="/noteBlank.svg" alt="" />
        ) : (
          <img src="/Archive(2).svg" alt="" />
        )}
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchived={onArchived}
            />
          ))
        ) : (
          <h1>Data Kosong</h1>
        )}
      </div>
    </section>
  );
};

export default NoteList;
