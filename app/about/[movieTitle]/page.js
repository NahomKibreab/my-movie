import { Movie } from "../../../components/movie";

export default async function About({ params }) {
  const movieTitle = params.movieTitle;
  const convertedMovieTitle = movieTitle.replace(/%20/g, "+");

  const res = await fetch(
    `http://www.omdbapi.com/?t=${convertedMovieTitle}&apikey=${process.env.MOVIE_API_KEY}`
  );

  const movieJson = await res.json();
  return (
    <div>
      <h1>About</h1>
      <Movie movie={movieJson} />
    </div>
  );
}
