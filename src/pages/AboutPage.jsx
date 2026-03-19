import { useTranslation } from "react-i18next";
import PageLayout from "../components/wrappers/PageLayout";
import Timeline from "../components/Timeline";

function EducationTimeline() {
	const { t } = useTranslation("pages", { keyPrefix: "about.timeline" });

	const items = ["bachelor", "mmd", "stx"].map((key) => ({
		time: t(`${key}.time`),
		title: t(`${key}.title`),
		content: t(`${key}.content`),
	}));

	return <Timeline items={items} />;
}

function ExperienceTimeline() {
	const { t } = useTranslation("pages", { keyPrefix: "about.timeline" });

	const items = ["intern_ds", "intern_dp"].map((key) => ({
		time: t(`${key}.time`),
		title: t(`${key}.title`),
		content: t(`${key}.content`),
	}));

	return <Timeline items={items} />;
}

export default function AboutPage() {
	const { t } = useTranslation("pages");

	return (
		<PageLayout title={t("about.title")} subtitle={t("about.subtitle")}>
			<div className="space-y-12 lg:flex lg:justify-center lg:space-y-0">
				<div className="space-y-5 lg:w-1/2 lg:space-y-7">
					<h3 className="text-center font-display text-3xl font-semibold text-secondary-content">{t("about.education")}</h3>
					<EducationTimeline />
				</div>
				<div className="space-y-5 lg:w-1/2 lg:space-y-7">
					<h3 className="text-center font-display text-3xl font-semibold text-secondary-content">{t("about.experience")}</h3>
					<ExperienceTimeline />
				</div>
			</div>
		</PageLayout>
	);
}
