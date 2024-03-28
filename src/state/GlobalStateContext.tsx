import { createContext } from "react";
import { Action, GlobalState, Pizza } from "../types/GlobalState";

/* const testPizza: Pizza = {
	pizzaMenuOption: { name: "Test Pizza", cost: 5 },
	extraToppings: [
		{ name: "Test Pizza", cost: 5 },
		{ name: "Test Pizza", cost: 5 },
	],
	size: { name: "Test Pizza", cost: 5 },
}; */

export const initialState = { pizzaOrder: [] as Pizza[] };

export const GlobalStateContext = createContext<{
	state: GlobalState;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => null,
});
