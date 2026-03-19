import { useTranslation } from "react-i18next";
import Tag from "./Tag";
import PropTypes from "prop-types";

export default function CodeBlock({ id }) {
	const { t, i18n } = useTranslation("projects");

	return (
		<div className="mockup-code h-fit bg-base-100 text-sm space-y-3 pr-4 xl:w-2/5 dark:bg-secondary">
			<pre data-prefix="$">
				<code className="font-semibold">
					{t("common.date")}:{" "}
					<span className="font-normal">{t(`${id}.date`)}</span>
				</code>
			</pre>
			<pre data-prefix="$" className="">
				<code className="font-semibold inline-flex ">
					{t("common.tags")}:{" "}
					<span className="flex gap-2 flex-wrap">
						{t(`${id}.tags`, { returnObjects: true }).map(
							(p, i) => (
								<Tag key={i} title={p}>
									{p}
								</Tag>
							)
						)}
					</span>
				</code>
			</pre>
			{/* <pre data-prefix="$">
				<code></code>
			</pre> */}
			<pre data-prefix="$">
				<code className="font-semibold">
					{t("common.code")}:{" "}
					<a
						href={`https://${t(`${id}.code`)}`}
						target="_blank"
						className="font-normal underline text-[#8BD30D] dark:text-accent">
						{t(`${id}.code`)}
					</a>
				</code>
			</pre>
			{i18n.exists(`projects:${id}.link`) && (
				<pre data-prefix="$">
					<code className="font-semibold">
						{t("common.link")}:{" "}
						<a
							href={`https://${t(`${id}.link`)}`}
							target="_blank"
							className="font-normal underline text-[#8BD30D] dark:text-accent">
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
