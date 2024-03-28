import { createContext } from "react";
import { Action, GlobalState, Pizza } from "../types/GlobalState";

export const initialState = { pizzaOrder: [] as Pizza[] };

export const GlobalStateContext = createContext<{
	state: GlobalState;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => null,
});
