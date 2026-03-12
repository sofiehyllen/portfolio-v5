import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProjectPage() {
	const { id } = useParams();
	const { t } = useTranslation("projects");
	const { t: tPages } = useTranslation("pages");

	return (
		<div className="mt-20 md:mt-28 md:mx-16 xl:mx-32">
			<div className="breadcrumbs text-sm pb-10">
				<ul>
					<li><Link to="/projects">{tPages("projects.title")}</Link></li>
					<li><p>{t(`${id}.title`)}</p></li>
				</ul>
			</div>
			<div>
				<h1>{t(`${id}.title`)}</h1>
				<p>{t(`${id}.subtitle`)}</p>
			</div>

		</div>
	);
}
