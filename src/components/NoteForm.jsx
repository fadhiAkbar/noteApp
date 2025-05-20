import { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmite = (e) => {
    e.preventDefault();

    onAddNote(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmite}>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="" className="font-medium text-[18px]">
            Tittle
          </label>
          <input
            type="text"
            placeholder="Type here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[600px] h-[55px] border-2 border-[#b9b9b9] bg-transparent rounded-[10px] pl-3 text-[#b9b9b9]"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="" className="font-medium text-[18px]">
            Content
          </label>
          <input
            type="text"
            placeholder=""
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-[600px] h-[104px] border-2 border-[#b9b9b9] bg-transparent rounded-[10px] pl-3 text-[#b9b9b9]"
          />
        </div>
        <button
          className="bg-[#1B80C7] text-white w-[600px] h-[50px] rounded-[10px]"
          type="submit"
        >
          Add Note
        </button>
      </form>
    </>
  );
};

export default NoteForm;
