import { Link } from "react-router-dom";
import Tag from "./Tag";
import PropTypes from "prop-types";
import { useState } from "react";
import { MdImageNotSupported } from "react-icons/md";

export default function ProjectCard({
	title,
	description,
	image,
	tags = [],
	link,
	date,
}) {
	const [imgError, setImgError] = useState(false);

	return (
		<Link to={link}>
			<div className="rounded-2xl bg-base-100/60 dark:bg-white/5 backdrop-blur-sm p-8 flex flex-col">
				<div className="flex items-start justify-between gap-4 pb-3">
					<h2 className="text-3xl font-medium font-display text-secondary-content">
						{title}
					</h2>
				</div>

				<hr className="border-neutral-content/20" />

				<div className="flex flex-col md:flex-row gap-6 py-4">
					<p className="text-sm leading-relaxed text-balance text-neutral-content md:w-1/2">
						{description}
					</p>
					{image && !imgError ? (
						<div className="md:w-1/2 rounded-xl overflow-hidden">
							<img
								src={image}
								alt={title}
								className="w-full h-full object-cover"
								onError={() => setImgError(true)}
							/>
						</div>
						) : (
						<div className="w-full min-h-44 bg-neutral-content/20 rounded-xl flex items-center justify-center">
							<MdImageNotSupported className="size-20 text-neutral-content"/>
						</div>
						)}
				</div>

				<hr className="border-neutral-content/20 pb-4" />

				<div className="flex items-center justify-between">
					{tags.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{tags.map((tag) => (
								<Tag key={tag} title={tag} />
							))}
						</div>
					)}
					<p className="text-xs text-neutral-content font-display">
						{date}
					</p>
				</div>
			</div>
		</Link>
	);
}

ProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
	link: PropTypes.string,
	date: PropTypes.string,
};
