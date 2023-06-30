import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Movie from "./Movie";
import styles from "./Popular.module.css";

const Popular = () => {
	const response = useFetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
	);
	const [popularMovies, setPopularMovies] = useState();

	useEffect(() => setPopularMovies(response?.results), [response]);

	return (
		<div className={styles.popular}>
			<h1>가장 인기있는 영화를 살펴보세요</h1>
			<div className={styles.movies}>
				{popularMovies &&
					popularMovies.map((movie) => (
						<Movie key={movie.id} {...movie} />
					))}
			</div>
		</div>
	);
};

export default Popular;
