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
        <div className="w-full h-128">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </CardHeader>
      <CardContent>
        <p>{movie.vote_average}</p>
      </CardContent>
      <CardFooter>
        <p>{movie.vote_average}</p>
      </CardFooter>
    </Card>
  );
}

export default MovieCard;
