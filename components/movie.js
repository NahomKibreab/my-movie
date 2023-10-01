import Image from "next/image";
import style from "./style.module.css";

export const Movie = ({ movie }) => {
  return (
    <div className={style.movieList}>
      <div>
        <h1>{movie.Title}</h1>
        <p>{movie.Year}</p>
        <p>{movie.Rated}</p>
        <Image src={movie.Poster} alt={movie.Title} width={300} height={410} />
      </div>
    </div>
  );
};
