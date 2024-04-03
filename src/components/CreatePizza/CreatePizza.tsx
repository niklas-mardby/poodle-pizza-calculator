import { useContext, useState } from "react";
import { Action, Pizza, PizzaProperty } from "../../types/types";
import { loadSizes, loadToppings, loadPizzaMenu } from "../../utils/loadData";
import Button from "../Button/Button";
import "./CreatePizza.scss";
import { GlobalStateContext } from "../../state/GlobalStateContext";

const CreatePizza = () => {
	const { dispatch } = useContext(GlobalStateContext);

	const pizzaMenu = loadPizzaMenu();
	const toppingsMenu = loadToppings();
	const sizesMenu = loadSizes();

	const [chosenPizza, setPizza] = useState(pizzaMenu[0]);
	const [chosenSize, setSize] = useState(sizesMenu[0]);
	const [chosenToppings, setToppings] = useState([] as PizzaProperty[]);

	const addTopping = (t: PizzaProperty) => {
		setToppings([...chosenToppings, t]);
	};
	const removeTopping = (t: PizzaProperty) => {
		setToppings(chosenToppings.filter((topping) => t.name !== topping.name));
	};

	return (
		<section className="CreatePizza">
			<h2>Create Pizza</h2>

			<div className="MenuBox">
				<h3>Choose size</h3>
				{sizesMenu &&
					sizesMenu.map((s) => {
						return (
							<RadioButton
								key={`sm-${s.name}`}
								name={s.name}
								cost={s.cost}
								group="sizesMenu"
								setOption={setSize}
								chosenOption={chosenSize}
							/>
						);
					})}
			</div>

			<div className="MenuBox">
				<h3>Choose pizza</h3>
				{pizzaMenu &&
					pizzaMenu.map((p) => {
						return (
							<RadioButton
								key={`pm-${p.name}`}
								name={p.name}
								cost={p.cost}
								group="pizzaMenu"
								setOption={setPizza}
								chosenOption={chosenPizza}
							/>
						);
					})}
			</div>

			<div className="MenuBox">
				<h3>Add extra toppings</h3>
				{toppingsMenu &&
					toppingsMenu.map((t) => {
						return (
							<CheckBox
								name={t.name}
								cost={t.cost}
								key={`t-${t.name}`}
								addTopping={addTopping}
								removeTopping={removeTopping}
							/>
						);
					})}
			</div>
			<Button
				handleClick={() => {
					dispatch({
						type: "ADD_PIZZA",
						payload: {
							pizzaMenuOption: chosenPizza,
							size: chosenSize,
							extraToppings: chosenToppings,
						} as Pizza,
					} as Action);
					console.log("add?", chosenPizza, chosenSize, chosenToppings);
				}}
			>
				Add Pizza
			</Button>
		</section>
	);
};

export default CreatePizza;

type RadioButtonProp = {
	name: string;
	cost: number;
	group: string;
	setOption: (p: PizzaProperty) => void;
	chosenOption: PizzaProperty;
};

const RadioButton = ({
	name,
	cost,
	group,
	setOption,
	chosenOption,
}: RadioButtonProp) => {
	const handleChange = () => {
		setOption({ name, cost } as PizzaProperty);
	};

	return (
		<p className="RadioButton">
			<input
				type="radio"
				name={group}
				id={name}
				value={name}
				checked={chosenOption.name === name}
				onChange={handleChange}
			/>
			<label htmlFor={name}>
				{name}, ${cost}
			</label>
		</p>
	);
};

type CheckBoxProp = {
	name: string;
	cost: number;
	addTopping: (p: PizzaProperty) => void;
	removeTopping: (p: PizzaProperty) => void;
};

const CheckBox = ({ name, cost, addTopping, removeTopping }: CheckBoxProp) => {
	const [isChecked, setChecked] = useState(false);

	const handleChange = () => {
		if (isChecked) removeTopping({ name, cost } as PizzaProperty);
		else addTopping({ name, cost } as PizzaProperty);

		setChecked(!isChecked);
	};

	return (
		<p className="CheckBox">
			<input
				id={name}
				type="checkbox"
				checked={isChecked}
				onChange={handleChange}
			/>
			<label htmlFor={name}>
				{name}, ${cost}
			</label>
		</p>
	);
};
