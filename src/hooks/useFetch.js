import { useEffect, useState } from "react";

const useFetch = (initialURL = "") => {
	const [response, setResponse] = useState();

	useEffect(() => {
		fetch(initialURL)
			.then((res) => res.json())
			.then((res) => setResponse(res));
	}, []);

	return response;
};

export default useFetch;
