import Popular from "../Components/Popular";
import Category from "../Components/Category";
import { useEffect } from "react";

function Main() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, []);
	return (
		<div className="Main">
			<Popular />
			<Category />
		</div>
	);
}

export default Main;
