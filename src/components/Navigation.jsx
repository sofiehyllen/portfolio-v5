import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navigation() {
	const { t } = useTranslation("navigation");

	return (
		<nav aria-label={t("mainNav")} role="navigation" className="pb-0.5 flex space-x-5 md:space-x-8 lg:space-x-10">
			<Link
				to="/projects"
				className="font-mono text-sm tracking-tight lg:text-base hover:text-accent transition-colors">
				{t("projects")}
			</Link>
			<Link
				to="/about"
				className="font-mono text-sm tracking-tight  lg:text-base hover:text-accent transition-colors">
				{t("about")}
			</Link>
			<Link
				to="/contact"
				className="font-mono text-sm tracking-tight  lg:text-base hover:text-accent transition-colors">
				{t("contact")}
			</Link>
		</nav>
	);
}
