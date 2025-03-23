export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string | null; // null일 수도 있음
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null; // null일 수도 있음
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
