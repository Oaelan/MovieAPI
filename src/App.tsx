import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "./types/movieApiTypes";
import { useLocation } from "react-router-dom";
import { fetchMovies } from "./api/api";
import { getRandomPage } from "./utils/mainUtils";
function App() {
  const location = useLocation();

  const [defaultMovie, setDefaultMovie] = useState<Movie[]>([]);
  //메인 페이지 접속시 랜덤 페이지값 설정
  const defaultPage = useRef(getRandomPage());

  // 기본으로 받아오는 영화 정보
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["defaultMovie", defaultPage.current],
    queryFn: () => fetchMovies(defaultPage.current), // API 요청 함수 호출
  });

  useEffect(() => {
    //api 요청 후 데이터 저장
    if (data && data.results) {
      // 처음 10개의 항목만 잘라서 상태에 저장
      setDefaultMovie(data.results.slice(0, 8));
    }
  }, [data]);

  useEffect(() => {
    // 경로가 "/"일 때만 refetch 실행
    if (location.pathname === "/" && data) {
      // 새로운 랜덤 페이지 설정
      defaultPage.current = getRandomPage();
      refetch();
    }
  }, [location, refetch]);

  return (
    <div className="App m-5 grid grid-3 gap-10">
      {/* 기본 영화 데이터 */}
      <div className="grid grid-cols-4 gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          defaultMovie.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
