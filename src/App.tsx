import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  // 기본으로 받아오는 영화 정보
  const fetchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <h1>영화제목 검색</h1>
      <Input type="text" placeholder="영화제목을 입력하세요" />
      <Button onClick={fetchMovie}>검색</Button>
    </>
  );
}

export default App;
