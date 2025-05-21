const Navbar = ({ onSearch }) => {
  return (
    <nav className="flex justify-between items-center mx-[144px] h-[100px] sticky top-0 z-50 bg-white">
      <img src="/logo.svg" alt="" className="w-[180px] h-[60px]" />
      <div className="flex gap-[8px] bg-[#F9FAFB] border-[#E5E7EB] rounded-xl max-w-[250px] h-[40px] pl-[10px]">
        <img src="/search.svg" alt="" className="w-[16px] text-[#6A7282]" />
        <input
          type="text"
          className="border-none bg-transparent text-[#6A7282]"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
