import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navigation() {
	const { t } = useTranslation("navigation");

	return (
		<nav className="pb-0.5 flex space-x-5 md:space-x-10">
			<Link
				to="/projects"
				className="font-display font-semibold text-sm md:text-base md:font-bold"
			>
				{t("projects")}
			</Link>
			<Link
				to="/about"
				className="font-display font-semibold text-sm md:text-base md:font-bold"
			>
				{t("about")}
			</Link>
			<Link
				to="/contact"
				className="font-display font-semibold text-sm md:text-base md:font-bold"
			>
				{t("contact")}
			</Link>
		</nav>
	);
}
