import { useContext } from "react";
import Button from "../Button/Button";
import "./PizzaOrder.scss";
import { GlobalStateContext } from "../../state/GlobalStateContext";
import { Action, GlobalState, Pizza } from "../../types/types";

const PizzaOrder = () => {
	const { state, dispatch } = useContext(GlobalStateContext);

	return (
		<section className="PizzaOrder">
			<h2>Your Pizza Order</h2>
			{state.pizzaOrder.length > 0 ? (
				<>
					{state.pizzaOrder.map((pizza, index) => {
						return (
							<PizzaCard
								key={index + "-" + pizza.pizzaMenuOption.name}
								pizza={pizza}
							/>
						);
					})}
					<TotalCostCard order={state.pizzaOrder} />
					<Button
						handleClick={() => {
							dispatch({ type: "CLEAR_ORDER" } as Action);
						}}
					>
						Clear Order
					</Button>
				</>
			) : (
				<div>Please add a pizza!</div>
			)}
		</section>
	);
};

export default PizzaOrder;

const totalPizzaCost = (pizza: Pizza): number => {
	let cost = 0;
	cost += pizza.pizzaMenuOption.cost + pizza.size.cost;
	if (pizza.extraToppings.length > 0) {
		cost += pizza.extraToppings.reduce((totalToppingCost, topping) => {
			return totalToppingCost + topping.cost;
		}, 0);
	}
	return cost;
};
const calculateTotalCost = (order: Pizza[]): number => {
	if (order.length === 0) return 0;

	return order.reduce((total, pizza) => {
		return total + totalPizzaCost(pizza);
	}, 0);
};

type PizzaCardProp = {
	pizza: Pizza;
};
const PizzaCard = ({ pizza }: PizzaCardProp) => {
	return (
		<div className="PizzaCard">
			<h4>
				{pizza.pizzaMenuOption.name}, ${totalPizzaCost(pizza)}
			</h4>
			<p>Size: {pizza.size.name}</p>
			{pizza.extraToppings.length > 0 && (
				<p>
					Extra:{" "}
					{pizza.extraToppings.reduce((outputString, topping) => {
						if (pizza.extraToppings.indexOf(topping) === 0) {
							return topping.name;
						}
						return outputString + ", " + topping.name;
					}, "")}
				</p>
			)}
		</div>
	);
};

type TotalCostCardProp = {
	order: Pizza[];
};
const TotalCostCard = ({ order }: TotalCostCardProp) => {
	return (
		<div className="TotalCostCard">
			Total cost: ${calculateTotalCost(order)}
		</div>
	);
};
