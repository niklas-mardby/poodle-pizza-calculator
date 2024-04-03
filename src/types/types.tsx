export type PizzaProperty = { name: string; cost: number };

export type Pizza = {
	pizzaMenuOption: PizzaProperty;
	size: PizzaProperty;
	extraToppings: PizzaProperty[];
};

export type Action =
	| { type: "ADD_PIZZA"; payload: Pizza }
	| { type: "REMOVE_PIZZA"; payload: Pizza }
	| { type: "UPDATE_PIZZA"; payload: Pizza }
	| { type: "CLEAR_ORDER" };

export type GlobalState = {
	pizzaOrder: Pizza[];
};
