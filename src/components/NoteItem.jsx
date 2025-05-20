const NoteItem = ({ note, onDelete, onArchived }) => {
  return (
    <div className="w-[350px] h-[200px] rounded-lg shadow-xl">
      <div
        className={`w-full h-[15px] rounded-t-lg ${
          !note.archive ? "bg-[#1B80C7]" : "bg-[#d9d9d9]"
        }`}
      ></div>
      <div className="flex items-center mt-5 justify-between px-4">
        <h1 className="text-2xl font-semibold">{note.title}</h1>
        <div className="flex gap-2">
          <div className="w-[40px] h-[40px] bg-[#f0abb5] rounded-lg border-2 border-[#D1021F] flex justify-center items-center">
            <img
              src="/trash.svg"
              alt=""
              className="w-[20px] h-[20px]"
              onClick={() => onDelete(note.id)}
            />
          </div>
          <div className="w-[40px] h-[40px] bg-[#ffe7d8] rounded-lg border-2 border-[#FF7E2B] flex justify-center items-center">
            <img
              src={!note.archive ? "/archive.svg" : "/boxArrowUp.svg"}
              alt=""
              className="w-[20px] h-[20px]"
              onClick={() => onArchived(note.id)}
            />
          </div>
        </div>
      </div>
      <p className="text-[#a8a8a8] px-4">~{showFormattedDate(note.createAt)}</p>
      <p className="text-[16px] px-4 mt-4">{note.content}</p>
    </div>
  );
};

export default NoteItem;

const showFormattedDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};
