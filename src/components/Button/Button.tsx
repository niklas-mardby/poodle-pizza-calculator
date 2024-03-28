import "./Button.scss";

type ButtonProps = {
	children: React.ReactNode;
	handleClick: () => void;
};

const Button = ({ children, handleClick }: ButtonProps) => {
	return (
		<button className="Button" onClick={handleClick}>
			{children}
		</button>
	);
};

export default Button;
