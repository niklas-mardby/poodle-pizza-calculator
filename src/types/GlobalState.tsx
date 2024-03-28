type pizzaProperty = { name: string; cost: number };

export type Pizza = {
	pizzaMenuOption: pizzaProperty;
	extraToppings: pizzaProperty[];
	size: pizzaProperty;
};

export type Action =
	| { type: "ADD_PIZZA"; payload: Pizza }
	| { type: "REMOVE_PIZZA"; payload: string }
	| { type: "UPDATE_PIZZA"; payload: Pizza }
	| { type: "CLEAR_ORDER" };

export type GlobalState = {
	pizzaOrder: Pizza[];
};
