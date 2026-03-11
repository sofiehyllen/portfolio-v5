import { Link } from "react-router-dom";
import LanguageButton from "./buttons/LanguageButton";
import Navigation from "./Navigation";
import ThemeButton from "./buttons/ThemeButton";
import { IoIosRocket } from "react-icons/io";
import Button from "./buttons/Button";
import { useTranslation } from "react-i18next";

export default function Header() {
	const { t } = useTranslation("navigation");
	return (
		<header className="flex justify-between">
			<div className="flex space-x-16 items-end">
				<Link to="/" className="flex text-4xl font-bold text-accent">
					<IoIosRocket className="inline-block mr-2" />
					sofie hyllen
				</Link>
				<Navigation />
			</div>
			<div className="flex space-x-7">
				<Link to="/contact">
					<Button variant="primary">{t("contact")}</Button>
				</Link>
				<ThemeButton />
				<LanguageButton />
			</div>
		</header>
	);
}
