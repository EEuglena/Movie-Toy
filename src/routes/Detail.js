import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styles from "./Detail.module.css";
import Genre from "../Components/Genre";

const Detail = () => {
	const { id } = useParams();
	const detail = useFetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
	);

	return (
		<div className={styles.detail}>
			{detail && (
				<>
					<div>
						<img
							src={`https://tmdb.org/t/p/original/${detail.backdrop_path}`}
							alt=""
						/>
					</div>
					<div className={styles.heading}>
						<h2>{detail.tagline}</h2>
						<h1>{detail.title}</h1>
						<div className={styles.genres}>
							{detail.genres.map((genre) => (
								<Genre {...genre} />
							))}
						</div>
					</div>
					<div className={styles.overview}>
						<p>줄거리</p>
						<p>{detail.overview}</p>
					</div>
					{detail.poster_path && (
						<div className={styles.poster}>
							<p>아트워크</p>
							<img
								src={`https://tmdb.org/t/p/original/${detail.poster_path}`}
								alt=""
								onClick={() =>
									window.open(
										`https://tmdb.org/t/p/original/${detail.poster_path}`
									)
								}
							/>
							<img
								src={`https://tmdb.org/t/p/original/${detail.backdrop_path}`}
								alt=""
								onClick={() =>
									window.open(
										`https://tmdb.org/t/p/original/${detail.backdrop_path}`
									)
								}
							/>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Detail;
