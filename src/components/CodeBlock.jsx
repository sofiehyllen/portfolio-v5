import { useTranslation } from "react-i18next";
import Tag from "./Tag";
import PropTypes from "prop-types";
import { projectTags } from "../data/projects";

export default function CodeBlock({ id }) {
	const { t, i18n } = useTranslation("projects");

	return (
		<div className="mockup-code h-fit bg-base-100 text-sm space-y-3 xl:w-2/5 dark:bg-secondary shadow-sm w-full">
			<pre data-prefix="$">
				<code className="font-semibold">
					{t("common.date")}:{" "}
					<span className="font-normal text-primary-content">
						{t(`${id}.date`)}
					</span>
				</code>
			</pre>
			<div className="flex items-start gap-2 font-semibold">
				<span className="select-none font-mono font-light w-8 text-right dark:text-[#6A6A7E] shrink-0">
					$
				</span>{" "}
				{/* data-prefix */}
				<span className="font-semibold font-mono pl-2">
					{t("common.tags")}:
				</span>
				<span className="flex flex-wrap gap-2 min-w-0 pr-2">
					{(projectTags[id] ?? []).map((tag) => (
						<Tag key={tag} title={tag} />
					))}
				</span>
			</div>
			<pre data-prefix="$" className="truncate">
				<code className="font-semibold">
					{t("common.code")}:{" "}
					<a
						href={`https://${t(`${id}.code`)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="font-normal underline text-primary-content">
						{t(`${id}.code`)}
					</a>
				</code>
			</pre>
			{i18n.exists(`projects:${id}.link`) && (
				<pre data-prefix="$" className="truncate">
					<code className="font-semibold">
						{t("common.link")}:{" "}
						<a
							href={`https://${t(`${id}.link`)}`}
							target="_blank"
							rel="noopener noreferrer"
							className="font-normal underline text-primary-content">
							{t(`${id}.link`)}
						</a>
					</code>
				</pre>
			)}
		</div>
	);
}

CodeBlock.propTypes = {
	id: PropTypes.string.isRequired,
};
