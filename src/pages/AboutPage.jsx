import { useTranslation } from "react-i18next";
import PageLayout from "../components/wrappers/PageLayout";
import Timeline from "../components/Timeline";
import Tag from "../components/Tag";
import { SKILLS } from "../data/skills";

function SkillsSection() {
	const { t } = useTranslation("pages");
	return (
		<div className="mb-16 md:mb-24">
			<h3 className="font-display text-3xl font-semibold text-secondary-content mb-8 md:mb-10">
				{t("about.skills.title")}
			</h3>
			<div className="space-y-12">
				{SKILLS.map(({ key, icon: Icon, items }) => (
					<div key={key} className="space-y-2">
						<p className="font-display text-primary-content text-lg font-semibold flex items-center gap-2">
							<Icon className="mb-1" />
							{t(`about.skills.${key}`)}
						</p>
						<div className="flex flex-wrap gap-2">
							{items.map((skill) => (
								<Tag key={skill} title={skill} size="md" />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

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
			<SkillsSection />
			<div className="space-y-12 lg:flex lg:justify-center lg:space-y-0">
				<div className="space-y-5 lg:w-1/2 lg:space-y-7">
					<h3 className="text-center font-display text-3xl font-semibold text-secondary-content">
						{t("about.education")}
					</h3>
					<EducationTimeline />
				</div>
				<div className="space-y-5 lg:w-1/2 lg:space-y-7">
					<h3 className="text-center font-display text-3xl font-semibold text-secondary-content">
						{t("about.experience")}
					</h3>
					<ExperienceTimeline />
				</div>
			</div>
		</PageLayout>
	);
}
