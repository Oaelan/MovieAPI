import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Movie } from "./types/movieApiTypes";
import { roundUpMovieScore } from "./utils/mainUtils";

interface OwnProps {
  movie: Movie;
}
function MovieCard({ movie }: OwnProps) {
  //평점 반올림해서 소수점 첫째자리까지 표시
  const roundedVoteAverage = roundUpMovieScore(movie.vote_average);
  return (
    <Card
      className="w-72 h-full bg-gradient-to-r from-[#373b43/50]
    to-[#516075] hover:scale-105 transition duration-300"
    >
      <CardHeader>
        <CardTitle className="text-white w-full !text-center overflow-hidden text-ellipsis whitespace-nowrap">
          {movie.title}
        </CardTitle>
      </CardHeader>
      <div className="px-7">
        <div className="w-full h-64 object-cover">
          <img
            className="w-full h-full object-contain shadow-lg shadow-gray-900/50"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </div>

      <CardContent className="text-[17px]">
        <div className="flex justify-between w-full gap-2">
          <p className="text-gray-400 text-sm">개봉일 : {movie.release_date}</p>
          <div className="w-16 h-full grid grid-cols-2 gap-2 text-gray-400 text-sm justify-items-center">
            <span>⭐️</span>
            <p>{roundedVoteAverage}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
