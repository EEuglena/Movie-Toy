import styles from "./Genre.module.css";

const Genre = ({ selected, id, name, setGenre }) => {
	return (
		<div
			className={selected ? styles.selected : styles.genre}
			onClick={selected ? null : () => setGenre(id)}
		>
			{name}
		</div>
	);
};

export default Genre;
