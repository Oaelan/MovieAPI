// api 요청
//앱키
import axios from "axios";

// API 키
const apiKey = import.meta.env.VITE_API_KEY; // API 키를 여기서 가져옵니다.

//메인 페이지 로드시 들고오는 기본 영화 데이터
export const fetchMovies = async (page: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          api_key: apiKey,
          language: "ko-KR", // 한국어로 데이터 요청
          vote_count: 10000, // 투표 수 1만 이상인 영화만
          page, // 페이지 번호
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("영화 데이터를 가져오는 중 오류 발생:", error);
    throw error; // useQuery에서 에러를 잡을 수 있게
  }
};

//검색 결과 조회
export const getSearchResult = async (searchTerm: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: apiKey,
          language: "ko-KR",
          query: searchTerm,
        },
      }
    );
    return response.data; // Axios는 자동으로 JSON으로 변환합니다.
  } catch (error) {
    console.error("검색 결과를 가져오는 중 오류 발생:", error);
    throw error; // useQuery에서 에러를 잡을 수 있게
  }
};
