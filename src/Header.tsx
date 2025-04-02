import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <div className="Header mt-20 w-[80%] flex flex-col items-center justify-center gap-5">
      <Link to="/" className="text-white text-4xl font-bold cursor-pointer">
        MOVIE SEARCH
      </Link>
      <div className="flex gap-2 w-[50%]">
        <Input
          className="text-white pl-5"
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
