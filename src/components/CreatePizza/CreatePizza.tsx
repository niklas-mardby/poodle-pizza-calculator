import Button from "../Button/Button";
import "./CreatePizza.scss";

const CreatePizza = () => {
	return (
		<section className="CreatePizza">
			<h2>Create Pizza</h2>
			<p>[ create pizza form goes here]</p>
			<Button
				handleClick={() => {
					console.log("hit?");
				}}
			>
				Add Pizza
			</Button>
		</section>
	);
};

export default CreatePizza;
