import { Link } from "react-router-dom";
import Tag from "./Tag";
import PropTypes from "prop-types";
import { useState } from "react";
import { MdImageNotSupported } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ id, image }) {
	const { t } = useTranslation("projects");
	const [imgError, setImgError] = useState(false);

	const title = t(`${id}.title`);
	const description = t(`${id}.subtitle`);
	const tags = t(`${id}.tags`, { returnObjects: true }) || [];
	const date = t(`${id}.date`);
	const link = `/projects/${id}`;

	return (
		<Link to={link}>
			<div className="rounded-2xl bg-primary/50 md:bg-secondary/30 backdrop-blur-sm p-4 flex flex-col dark:bg-white/5 lg:p-6 xl:p-8">
				<div className="flex items-start justify-between gap-4 pb-3">
					<h2 className="text-3xl font-medium font-display text-secondary-content">
						{title}
					</h2>
				</div>

				<hr className="border-neutral-content/20" />

				<div className="flex flex-col gap-4 py-4 2xl:flex-row">
					<p className="font-mono text-sm leading-relaxed text-balance text-neutral-content 2xl:w-1/2">
						{description}
					</p>
					{image && !imgError ? (
						<div className="h-48 rounded-xl overflow-hidden md:mx-4 md:h-56 xl:mx-0 2xl:h-48 2xl:w-1/2">
							<img
								src={image}
								alt={title}
								className="w-full h-full object-cover"
								onError={() => setImgError(true)}
							/>
						</div>
					) : (
						<div className="w-full min-h-44 bg-neutral-content/20 rounded-xl flex items-center justify-center">
							<MdImageNotSupported className="size-20 text-neutral-content" />
						</div>
					)}
				</div>

				<hr className="border-neutral-content/20 pb-4" />

				<div className="flex justify-between">
					{tags.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{tags.map((tag) => (
								<Tag key={tag} title={tag} />
							))}
						</div>
					)}
					<p className="text-xs text-neutral-content font-mono shrink-0 pt-1 ml-4 md:ml-10">
						{date}
					</p>
				</div>
			</div>
		</Link>
	);
}

ProjectCard.propTypes = {
	id: PropTypes.string.isRequired,
	image: PropTypes.string,
};
