import PropTypes from "prop-types";

export default function Tag({ title }) {
	return (
		<div className="rounded-full bg-success px-2 py-1 w-fit">
			<p className="text-accent-content text-xs font-medium">#{title}</p>
		</div>
	);
}

Tag.propTypes = {
	title: PropTypes.string.isRequired,
};
