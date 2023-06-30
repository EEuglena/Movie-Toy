import styles from "./TopButton.module.css";

const TopButton = () => {
	return (
		<div
			onClick={() =>
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				})
			}
			className={styles.topbutton}
		>
			▲
		</div>
	);
};

export default TopButton;
