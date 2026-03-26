import PropTypes from "prop-types";

export default function Tag({ title, size = "sm" }) {
	const styles = {
		sm: "px-2 py-1 text-xs",
		md: "px-4 py-1.5 text-sm",
	};

	return (
		<div className={`rounded-full bg-success w-fit ${styles[size]}`}>
			<p className={`text-accent-content font-mono font-medium`}>
				{title}
			</p>
		</div>
	);
}

Tag.propTypes = {
	title: PropTypes.string.isRequired,
	size: PropTypes.oneOf(["sm", "md"]),
};
