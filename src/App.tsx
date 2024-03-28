import "./App.scss";
import CreatePizza from "./components/CreatePizza/CreatePizza";
import PizzaOrder from "./components/PizzaOrder/PizzaOrder";

function App() {
	return (
		<main className="App">
			<h1>🐩 poodle-pizza-calculator 🐩</h1>
			<div className="wrapper">
				<CreatePizza />
				<PizzaOrder />
			</div>
		</main>
	);
}

export default App;
