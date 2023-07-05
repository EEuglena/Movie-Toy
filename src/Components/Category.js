import useFetch from "../hooks/useFetch";
import Movie from "./Movie";
import Genre from "./Genre";
import styles from "./Category.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
	const response = useFetch(
		`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
	);
	const { genre } = useParams();
	const [genreList, setGenreList] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState();
	const [selectedMovies, setSelectedMovies] = useState([]);

	useEffect(() => {
		if (response) {
			setGenreList(response.genres);
			setSelectedGenre(
				genre && genre !== "default"
					? response.genres.find((g) => g.name === genre).id
					: response.genres[0].id
			);
		}
	}, [response, genre]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&with_genres=${selectedGenre}`
		)
			.then((res) => res.json())
			.then((res) => setSelectedMovies(res.results));
	}, [selectedGenre]);

	return (
		<div className={styles.category}>
			<h1>장르별로 영화를 찾아보세요</h1>
			<div className={styles.genres}>
				{genreList &&
					genreList.map((genre) => (
						<Genre
							{...genre}
							selected={parseInt(selectedGenre)}
							key={genre.id}
							onClick={(event) => {
								event.preventDefault();
								if (!event.target.selected)
									setSelectedGenre(event.target.id);
							}}
						/>
					))}
			</div>
			<div className={styles.movies}>
				{selectedMovies &&
					selectedMovies.map((movie) => (
						<Movie key={movie.id} {...movie} />
					))}
			</div>
		</div>
	);
};

export default Category;
