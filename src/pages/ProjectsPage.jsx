import PageLayout from "../components/wrappers/PageLayout";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";
import ParkzoneImg from "@assets/parkzone.png";

const projects = [
	{ id: "shopify", image: null, tags: ["AI", "shopify"], date: "jan 26" },
	{ id: "wait", image: ParkzoneImg, tags: ["ux", "design"], date: "jun 25" },
	{ id: "parkzone", image: ParkzoneImg, tags: ["fullstack", "webdev", "API"], date: "jun 24" }
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
					tags={project.tags}
					link={`/projects/${project.id}`}
				/>
			))}
			</div>
		</PageLayout>
	);
}
