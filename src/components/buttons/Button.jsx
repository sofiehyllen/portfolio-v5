import PropTypes from "prop-types";

export default function Button({ variant = "primary", children, ...props }) {
	// Define variant styles
	const variants = {
		primary: "bg-gradient-to-r from-[#C8F679] to-accent text-[#161621]",
		secondary: "",
	};

	// Default styles (common for all buttons)
	const baseStyle =
		"text-[#161621] px-4 pt-2 pb-1.5 rounded-full text-sm font-semibold";

	// Merge base styles with variant-specific styles
	const buttonStyle = `${baseStyle} ${variants[variant]}`;

	return (
		<button className={buttonStyle} {...props}>
			{children}
		</button>
	);
}

// PropTypes to enforce valid values for variant
Button.propTypes = {
	variant: PropTypes.oneOf(["primary", "secondary"]),
	children: PropTypes.node.isRequired,
};
