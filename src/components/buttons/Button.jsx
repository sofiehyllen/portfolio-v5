import PropTypes from "prop-types";

export default function Button({ variant = "primary", children, ...props }) {
	const baseStyle =
		"px-4 pt-2 pb-1.5 rounded-full text-sm font-semibold w-fit";

	if (variant === "secondary") {
		return (
			<div
				className="p-[2px] rounded-full w-fit"
				style={{
					background:
						"conic-gradient(from -110deg, #A1F01C, #1994FF, #B911E3, #E97100, #A1F01B)",
				}}>
				<button
					className={`${baseStyle} bg-primary text-primary-content w-fit`}
					{...props}>
					{children}
				</button>
			</div>
		);
	}

	return (
		<button
			className={`${baseStyle} bg-gradient-to-r from-[#C8F679] to-accent text-[#161621] transition-all duration-300 hover:brightness-105 hover:dark:brightness-110`}
			{...props}>
			{children}
		</button>
	);
}

Button.propTypes = {
	variant: PropTypes.oneOf(["primary", "secondary"]),
	children: PropTypes.node.isRequired,
};
