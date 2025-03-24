import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Movie } from "./types/movieApiTypes";

interface OwnProps {
  movie: Movie;
}

function MovieCard({ movie }: OwnProps) {
  return (
    <Card className="w-72 h-full">
      <CardHeader>
        <CardTitle className="w-full !text-center overflow-hidden text-ellipsis whitespace-nowrap">
          {movie.title}
        </CardTitle>
      </CardHeader>
      <div className="px-7">
        <div className="w-full h-64 object-cover">
          <img
            className="w-full h-full object-contain border-2 border-red-500"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </div>

      <CardContent className="text-[17px]">
        <div className="flex justify-between w-full gap-2">
          <p>개봉일 : {movie.release_date}</p>
          <p>⭐️ {movie.vote_average}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
