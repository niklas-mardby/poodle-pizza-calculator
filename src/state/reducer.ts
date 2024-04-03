import { Action, GlobalState } from "../types/types";
import { initialState } from "./GlobalStateContext";

const reducer = (state: GlobalState, action: Action): GlobalState => {
	switch (action.type) {
		case "ADD_PIZZA":
			return { pizzaOrder: [...state.pizzaOrder, action.payload] };
		case "REMOVE_PIZZA":
			return {
				...state,
				pizzaOrder: state.pizzaOrder.filter(
					(pizza) => pizza !== action.payload
				),
			};
		case "UPDATE_PIZZA":
			return state;
		case "CLEAR_ORDER":
			return initialState;
		default:
			return state;
	}
};

export default reducer;
