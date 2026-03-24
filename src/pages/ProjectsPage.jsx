import PageLayout from "../components/wrappers/PageLayout";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";

export default function ProjectsPage() {
	const { t } = useTranslation("pages");

	return (
		<PageLayout
			title={t("projects.title")}
			subtitle={t("projects.subtitle")}>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-7">
				{projects.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</PageLayout>
	);
}
