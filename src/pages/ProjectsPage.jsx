import PageLayout from "../components/wrappers/PageLayout";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";
import ParkzoneImg from "@assets/parkzone.png";
import WidgetImg from "@assets/widget_chat_summer.png";
import SnakeImg from "@assets/snake_nn.png";
import WaitImg from "@assets/wait_customer_dashboard.png";

const projects = [
	{ id: "shopify", image: WidgetImg },
	{ id: "wait", image: WaitImg },
	{ id: "snake", image: SnakeImg },
	{ id: "parkzone", image: ParkzoneImg },
];

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
