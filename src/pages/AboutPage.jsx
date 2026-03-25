import { useTranslation } from "react-i18next";
import PageLayout from "../components/wrappers/PageLayout";
import Timeline from "../components/Timeline";
import Tag from "../components/Tag";

function parseBold(text) {
	return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
		i % 2 === 1 ? <strong key={i}>{part}</strong> : part
	);
}

const SKILLS = {
	backend: ["Python", "Flask", "REST API", "Gunicorn", "Node.js"],
	databases: ["MySQL", "PostgreSQL", "Redis", "Firestore", "GraphQL"],
	frontend: ["React", "JavaScript", "Tailwind", "Vite", "HTML", "CSS"],
	devops: ["Docker", "Nginx", "GitLab-CI", "CI/CD", "Git"],
};

function SkillsSection() {
	const { t } = useTranslation("pages");
	return (
		<div className="mb-16 md:mb-24">
			<h3 className="font-display text-3xl font-semibold text-secondary-content mb-8 md:mb-10">
				{t("about.skills.title")}
			</h3>
			<div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
				{Object.entries(SKILLS).map(([category, skills]) => (
					<div key={category} className="space-y-3">
						<p className="font-mono text-xs text-neutral-content uppercase tracking-widest">
							{t(`about.skills.${category}`)}
						</p>
						<div className="flex flex-wrap gap-2">
							{skills.map((skill) => (
								<Tag key={skill} title={skill} />
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
			{/* <div className="space-y-8 mb-20">
				<h2 className="font-display text-3xl font-semibold text-secondary-content">{t("about.atm")}</h2>
				<ul className="space-y-2 list-disc list-inside">
					{t(`about.atm-content`, { returnObjects: true }).map(
						(p, i) => (
							<li
								className="pl-10 font-mono text-sm xl:text-base"
								key={i}>
								{parseBold(p)}
							</li>
						)
					)}
				</ul>
			</div> */}
			<SkillsSection />
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
