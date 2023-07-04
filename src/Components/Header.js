import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.header}>
			<Link to={"/"}>NOTFLUX</Link>
			<div className={styles.navigator}>
				<button>인기순</button>
				<button>장르별</button>
			</div>
		</div>
	);
};

export default Header;
