import { useParams } from "react-router-dom";
import ResultCard from "./ResultCard";
import { getSearchResult } from "./api/api";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "./types/movieApiTypes";
function Result() {
  const [searchData, setSearchData] = useState<Movie[]>([]);
  // URL 파라미터에서 searchTerm 값을 가져옵니다
  const { searchTerm } = useParams<{ searchTerm: string }>();
  const { isLoading, error, data } = useQuery({
    queryKey: ["searchResult", searchTerm], //쿼리 식별자
    queryFn: () => {
      //searchTerm이 유효할 때만 API 요청
      if (searchTerm) {
        return getSearchResult(searchTerm); // searchTerm이 유효할 때만 API 요청
      }
    },
  });
  useEffect(() => {
    console.log(data);
    if (data && data.results) {
      setSearchData(data.results);
    }
  }, [data]);
  return (
    <div className="Result grid gap-10 w-full h-full px-20 justify-items-center">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        searchData.map((movie) => <ResultCard movie={movie} key={movie.id} />)
      )}
    </div>
  );
}

export default Result;
