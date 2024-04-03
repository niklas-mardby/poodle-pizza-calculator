import data from "../data/data.json";
import { PizzaProperty } from "../types/types";

// export const createPizza = (): Pizza => {};

export const loadPizzaMenu = (): PizzaProperty[] => {
	const pizzas: PizzaProperty[] = data.pizza_menu.map((p) => {
		return { name: p.name, cost: p.cost } as PizzaProperty;
	});
	return pizzas;
};

export const loadToppings = (): PizzaProperty[] => {
	const toppings: PizzaProperty[] = data.extra_toppings.map((t) => {
		return { name: t.name, cost: t.cost } as PizzaProperty;
	});
	return toppings;
};

export const loadSizes = (): PizzaProperty[] => {
	const sizes: PizzaProperty[] = data.sizes.map((s) => {
		return { name: s.name, cost: s.cost } as PizzaProperty;
	});
	return sizes;
};
