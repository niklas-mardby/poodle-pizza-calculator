import Button from "../Button/Button";
import "./PizzaOrder.scss";

const PizzaOrder = () => {
	return (
		<section className="PizzaOrder">
			<h2>Your Pizza Order</h2>
			<p>[ här visar vi alla beställda pizzor ]</p>
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
