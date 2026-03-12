import { useTranslation } from "react-i18next";

export default function LanguageButton() {
	const { i18n, t } = useTranslation("navigation");

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<div className="md:flex md:align-bottom">
			<p className="text-lg font-medium pb-2 md:hidden">
				{t("language")}
			</p>
			<div className="flex items-end pb-0.5">
				<button
					onClick={() => changeLanguage("en")}
					className={`font-display font-bold text-3xl md:text-base ${
						i18n.language === "en" ? "underline" : "text-neutral"
					}`}
				>
					en
				</button>
				<span className="font-medium px-2 text-neutral text-3xl md:text-base">
					/
				</span>
				<button
					onClick={() => changeLanguage("da")}
					className={`font-display font-bold text-3xl md:text-base ${
						i18n.language === "da" ? "underline" : "text-neutral"
					}`}
				>
					da
				</button>
			</div>
		</div>
	);
}
