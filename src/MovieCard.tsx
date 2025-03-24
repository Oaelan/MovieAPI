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
    <Card>
      <CardHeader>
        <CardTitle className="!text-center">{movie.title}</CardTitle>
      </CardHeader>
      <div className="w-full h-64 px-7">
        <img
          className="w-full h-full object-contain"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
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
