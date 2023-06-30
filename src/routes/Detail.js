import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import styles from "./Detail.module.css";

const Detail = () => {
	const { id } = useParams();
	const detail = useFetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
	);

	return (
		<div className={styles.detail}>
			{detail ? (
				<>
					<img
						src={`https://tmdb.org/t/p/original/${detail.backdrop_path}`}
						alt=""
					/>
					<div>{detail.title}</div>
					<div>{detail.overview}</div>
				</>
			) : null}
		</div>
	);
};

export default Detail;
