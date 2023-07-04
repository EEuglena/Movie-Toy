import styles from "./Genre.module.css";

const Genre = ({ selected, id, name, setGenre }) => {
	return (
		<div
			className={selected ? styles.selected : styles.genre}
			onClick={!selected && setGenre ? () => setGenre(id) : null}
		>
			{name}
		</div>
	);
};

export default Genre;
