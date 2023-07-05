import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
	const [y, setY] = useState(window.scrollY);
	window.addEventListener("scroll", () => setY(window.scrollY));

	return (
		<div className={styles.header}>
			<Link to={"/"}>
				<span
					style={{
						paddingLeft: Math.max(0, 120 - 1.2 * y),
						paddingRight: Math.max(0, 120 - 1.2 * y),
					}}
				>
					NOTFLUX
				</span>
			</Link>
			<div className={styles.navigator}>
				<Link to={"/popular"}>인기작</Link>
				<Link to={"/genre/default"}>장르별</Link>
			</div>
		</div>
	);
};

export default Header;
