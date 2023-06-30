import styles from "./Movie.module.css";
import { useNavigate } from "react-router-dom";

const Movie = ({ id, title, overview, backdrop_path }) => {
	const navigate = useNavigate();

	return (
		<div className={styles.movie} onClick={() => navigate(`/${id}`)}>
			<img src={`https://tmdb.org/t/p/w300/${backdrop_path}`} alt="" />
			<div>
				<h3>{title}</h3>
			</div>
		</div>
	);
};

export default Movie;
