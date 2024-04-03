import { useContext } from "react";
import Button from "../Button/Button";
import "./PizzaOrder.scss";
import { GlobalStateContext } from "../../state/GlobalStateContext";
import { Action, Pizza } from "../../types/types";

const PizzaOrder = () => {
	const { state, dispatch } = useContext(GlobalStateContext);

	return (
		<section className="PizzaOrder">
			<h2>Your Pizza Order</h2>
			{state.pizzaOrder.length > 0 ? (
				<div>
					{state.pizzaOrder.map((pizza, index) => {
						return (
							<PizzaCard
								key={index + "-" + pizza.pizzaMenuOption.name}
								pizza={pizza}
							/>
						);
					})}
				</div>
			) : (
				<div>Please add a pizza!</div>
			)}
			<Button
				handleClick={() => {
					dispatch({ type: "CLEAR_ORDER" } as Action);
				}}
			>
				Clear Order
			</Button>
		</section>
	);
};

export default PizzaOrder;

type PizzaCardProp = {
	pizza: Pizza;
};
const PizzaCard = ({ pizza }: PizzaCardProp) => {
	return <div className="PizzaCard">{pizza.pizzaMenuOption.name}</div>;
};
