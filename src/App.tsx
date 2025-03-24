import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "./types/movieApiTypes";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const getRandomPage = () => {
    return Math.floor(Math.random() * 17) + 1; // 1~17 사이 랜덤 값
  };
  const [defalutMovie, setDefalutMovie] = useState<Movie[]>([]);
  const defalutPage = useRef(getRandomPage());

  // api키
  const apiKey = import.meta.env.VITE_API_KEY;
  // 기본으로 받아오는 영화 정보
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["defaultMovie"], //쿼리 식별자
    queryFn: () =>
      //api 요청 함수
      fetch(
        //인기순으로 영화 데이터 요청
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&vote_count.gte=10000&page=${defalutPage.current}`
      ).then((data) => data.json()),
  });

  useEffect(() => {
    //api 요청 후 데이터 저장
    if (data && data.results) {
      // 처음 10개의 항목만 잘라서 상태에 저장
      setDefalutMovie(data.results.slice(0, 8));
    }
  }, [data]);

  useEffect(() => {
    // 경로가 "/"일 때만 refetch 실행
    if (location.pathname === "/") {
      // 새로운 랜덤 페이지 설정
      defalutPage.current = getRandomPage();
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
          defalutMovie.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
