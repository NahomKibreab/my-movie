import { Movie } from "../components/movie";
import movies from "../data/movies.json";
import style from "./page.module.css";

export default function Home() {
  const movieList = movies.map((movie) => {
    return <Movie movie={movie} key={movie.Title} />;
  });
  return (
    <div>
      <h1>Home</h1>
      <div className={style.movieContainer}>{movieList}</div>
    </div>
  );
}
