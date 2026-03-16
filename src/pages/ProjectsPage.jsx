import PageLayout from "../components/wrappers/PageLayout";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";
import ParkzoneImg from "@assets/parkzone.png";
import WidgetImg from "@assets/widget_chat_summer.png";

const projects = [
	{ id: "shopify", image: WidgetImg },
	{ id: "wait", image: ParkzoneImg },
	{
		id: "parkzone",
		image: ParkzoneImg,
	},
];

export default function ProjectsPage() {
	const { t } = useTranslation("pages");
	const { t: tProjects } = useTranslation("projects");

	return (
		<PageLayout
			title={t("projects.title")}
			subtitle={t("projects.subtitle")}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						title={tProjects(`${project.id}.title`)}
						description={tProjects(`${project.id}.subtitle`)}
						image={project.image}
						tags={tProjects(`${project.id}.tags`, {
							returnObjects: true,
						})}
						link={`/projects/${project.id}`}
						date={tProjects(`${project.id}.date`)}
					/>
				))}
			</div>
		</PageLayout>
	);
}
