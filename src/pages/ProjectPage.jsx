import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Tag from "../components/Tag";

export default function ProjectPage() {
	const { id } = useParams();
	const { t, i18n } = useTranslation("projects");

	return (
		<div className="space-y-7 mt-20 md:mt-28 md:mx-16 xl:mx-32">
			{/* <div className="breadcrumbs text-sm pb-10">
				<ul>
					<li><Link to="/projects">{tPages("projects.title")}</Link></li>
					<li><p>{t(`${id}.title`)}</p></li>
				</ul>
			</div> */}
			<div className="space-y-5 md:w-2/3">
				<h1 className="font-display text-6xl font-bold">
					{t(`${id}.title`)}
				</h1>
				<p className="font-mono">{t(`${id}.subtitle`)}</p>
			</div>
			<div className="space-y-7 xl:flex xl:space-x-8 xl:space-y-0">
				<div className="mockup-code h-fit bg-secondary text-sm space-y-1.5 xl:w-2/5">
					<pre data-prefix="$">
						<code className="font-semibold">
							{t("common.date")}:{" "}
							<span className="font-normal">
								{t(`${id}.date`)}
							</span>
						</code>
					</pre>
					<pre data-prefix="$" className="flex">
						<code className="font-semibold flex items-center">
							{t("common.tags")}:{" "}
							<span className="flex space-x-2">
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
					<pre data-prefix="$">
						<code></code>
					</pre>
					<pre data-prefix="$">
						<code className="font-semibold">
							{t("common.code")}:{" "}
							<a
								href={t(`${id}.code`)}
								target="_blank"
								className="font-normal underline"
							>
								{t(`${id}.code`)}
							</a>
						</code>
					</pre>
					{i18n.exists(`projects:${id}.link`) && (
						<pre data-prefix="$">
							<code className="font-semibold">
								{t("common.link")}:{" "}
								<a
									href={t(`${id}.link`)}
									target="_blank"
									className="font-normal underline"
								>
									{t(`${id}.link`)}
								</a>
							</code>
						</pre>
					)}
				</div>
				<div className="xl:w-3/5">
					<h2 className="font-display text-3xl font-bold pb-3">
						{t("common.description")}
					</h2>
					<div className="space-y-3">
						{t(`${id}.description`, { returnObjects: true }).map(
							(p, i) => (
								<p className="font-mono text-sm" key={i}>
									{p}
								</p>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
