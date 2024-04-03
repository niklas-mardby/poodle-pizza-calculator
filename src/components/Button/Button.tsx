import "./Button.scss";

type ButtonProps = {
	children: React.ReactNode;
	handleClick: () => void;
	upperRightCorner?: boolean;
};

const Button = ({ children, handleClick, upperRightCorner }: ButtonProps) => {
	return (
		<button
			className={`Button ${upperRightCorner && "upperRightCorner"}`}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default Button;
