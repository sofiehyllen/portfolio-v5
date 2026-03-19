import PropTypes from "prop-types";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

export default function Timeline({ items }) {
	return (
		<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
			{items.map((item, index) => {
				const isLeft = index % 2 === 0;
				const Icon = isLeft
					? FaCircleChevronLeft
					: FaCircleChevronRight;

				return (
					<li key={index}>
						{index !== 0 && <hr className="bg-secondary" />}
						<div className="timeline-middle">
							<Icon className="text-accent size-3.5" />
						</div>
						<div
							className={
								isLeft
									? "timeline-start mb-10 md:text-end pl-2 md:pl-0 md:pr-2"
									: "timeline-end md:mb-10 pl-2"
							}>
							<time className="font-mono text-neutral-content">
								{item.time}
							</time>
							<h4 className="text-lg font-display font-bold text-primary-content">
								{item.title}
							</h4>
							<p className="font-mono text-sm">{item.content}</p>
						</div>
						{index !== items.length - 1 && (
							<hr className="bg-secondary" />
						)}
					</li>
				);
			})}
		</ul>
	);
}

Timeline.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			time: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
		})
	).isRequired,
};
