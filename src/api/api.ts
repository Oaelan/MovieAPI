// api 요청
//앱키
const apiKey = import.meta.env.VITE_API_KEY; // API 키를 여기서 가져옵니다.

//메인 페이지 로드시 들고오는 기본 영화 데이터
export const fetchMovies = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&vote_count.gte=10000&page=${page}`
  );
  if (!response.ok) {
    throw new Error("네트워크 응답이 좋지 않습니다.");
  }
  return response.json();
};

//검색 결과 조회
export const getSearchResult = async (searchTerm: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=ko-KR&query=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error("네트워크 응답이 좋지 않습니다.");
  }
  return response.json();
};
