import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Detail from "./routes/Detail";
import Categories from "./routes/Categories";
import Populars from "./routes/Populars";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TopButton from "./Components/TopButton";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router basename="/Movie-Toy">
				<Header />
				<Routes>
					<Route path="/popular" element={<Populars />}></Route>
					<Route
						path="/genre/:genre"
						element={<Categories />}
					></Route>
					<Route path="/:id" element={<Detail />}></Route>
					<Route path="/" element={<Main />}></Route>
				</Routes>
				<Footer />
			</Router>
			<TopButton />
		</div>
	);
}

export default App;
