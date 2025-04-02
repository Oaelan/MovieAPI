import { Card } from "./components/ui/card";
import { Movie } from "./types/movieApiTypes";
import { roundUpMovieScore } from "./utils/mainUtils";

interface OwnProps {
  movie: Movie;
}

function ResultCard({ movie }: OwnProps) {
  // 평점 반올림해서 소수점 첫째자리까지 표시하는 함수
  const roundedVoteAverage = roundUpMovieScore(movie.vote_average);

  return (
    <Card className="p-0 flex flex-row w-[80%] bg-gray-600 h-[150px] hover:bg-gray-500 transition-all duration-300">
      <div className="">
        <div className="min-w-[94px] w-[94px] h-[148px]">
          <img
            className="w-full h-full object-cover rounded-l-xl"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="search-result-image"
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center p-5">
        <div className="text-2xl font-bold text-gray-200">{movie.title}</div>
        <div className="text-sm text-gray-400">{movie.release_date}</div>
        <div className="text-sm text-gray-400">⭐️ {roundedVoteAverage}</div>
        <div className="text-sm text-gray-400 overflow-hidden h-[100px] line-clamp-2">
          {movie.overview}
        </div>
      </div>
    </Card>
  );
}

export default ResultCard;
