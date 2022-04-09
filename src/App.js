import "./App.sass";
import { Header } from "./components/Header";
import { TaskCards } from "./components/TaskCards";

function App() {
	return (
		<div className="App">
			<div className="wrap">
				<Header />

				<main>
					<TaskCards />
				</main>
			</div>
		</div>
	);
}

export default App;
