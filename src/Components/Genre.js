import styles from "./Genre.module.css";

const Genre = ({ selected, id, name, onClick }) => {
	return (
		<div
			className={selected === id ? styles.selected : styles.genre}
			onClick={onClick}
			id={id}
			name={name}
		>
			{name}
		</div>
	);
};

export default Genre;
