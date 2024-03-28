import { useContext } from "react";
import Button from "../Button/Button";
import "./PizzaOrder.scss";
import { GlobalStateContext } from "../../state/GlobalStateContext";

const PizzaOrder = () => {
	const { state } = useContext(GlobalStateContext);

	return (
		<section className="PizzaOrder">
			<h2>Your Pizza Order</h2>
			<p>[ här visar vi alla beställda pizzor ]</p>
			{state.pizzaOrder.length > 0 ? (
				<div>alla pizzor</div>
			) : (
				<div>Please add a pizza!</div>
			)}
			<Button
				handleClick={() => {
					console.log("hit?");
				}}
			>
				Clear Order
			</Button>
		</section>
	);
};

export default PizzaOrder;
