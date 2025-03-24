import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

function Header() {
  const navigate = useNavigate();
  const searchInputRef = useRef("");
  const handleSearchClick = () => {
    const searchTerm = searchInputRef.current.trim();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };
  return (
    <div className="Header mt-20 w-full flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">MOVIE SEARCH</h1>
      <div className="flex gap-2 w-[50%]">
        <Input
          type="text"
          placeholder="영화제목을 입력하세요"
          onChange={(e) => (searchInputRef.current = e.target.value)}
        />
        <Button onClick={handleSearchClick}>검색</Button>
      </div>
    </div>
  );
}

export default Header;
