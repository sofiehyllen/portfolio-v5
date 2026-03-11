import PageLayout from "../components/wrappers/PageLayout";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
	const { t } = useTranslation("pages");

	return (
		<PageLayout
			title={t("projects.title")}
			subtitle={t("projects.subtitle")}
		>
			<ProjectCard />
		</PageLayout>
	);
}
