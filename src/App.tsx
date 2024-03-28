import "./App.scss";
import CreatePizza from "./components/CreatePizza/CreatePizza";
import { GlobalStateProvider } from "./components/GlobalStateProvider";
import PizzaOrder from "./components/PizzaOrder/PizzaOrder";

function App() {
	return (
		<GlobalStateProvider>
			<main className="App">
				<h1>🐩 poodle-pizza-calculator 🐩</h1>
				<div className="wrapper">
					<CreatePizza />
					<PizzaOrder />
				</div>
			</main>
		</GlobalStateProvider>
	);
}

export default App;
