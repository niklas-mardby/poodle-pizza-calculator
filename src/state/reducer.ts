import { Action, GlobalState } from "../types/GlobalState";
import { initialState } from "./GlobalStateContext";

const reducer = (state: GlobalState, action: Action): GlobalState => {
	switch (action.type) {
		case "ADD_PIZZA":
			return state;
		case "REMOVE_PIZZA":
			return state;
		case "UPDATE_PIZZA":
			return state;
		case "CLEAR_ORDER":
			return initialState;
		default:
			return state;
	}
};

export default reducer;
