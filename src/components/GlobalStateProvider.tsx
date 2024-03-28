import { useReducer } from "react";
import { GlobalStateContext, initialState } from "../state/GlobalStateContext";
import reducer from "../state/reducer";

type GlobalStateProviderProp = {
	children: React.ReactNode;
};
export const GlobalStateProvider = ({ children }: GlobalStateProviderProp) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalStateContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalStateContext.Provider>
	);
};
