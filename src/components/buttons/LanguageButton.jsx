// import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageButton() {
	const { i18n, t } = useTranslation("navigation");

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem("language", lng);
	};
	return (
		<div className="md:flex md:align-bottom">
			<p className="text-lg font-medium pb-2 md:hidden">
				{t("language")}
			</p>
			<div className="flex items-end pb-0.5">
				<button
					onClick={() => changeLanguage("en")}
					aria-label={t("switchToEnglish")}
					aria-pressed={i18n.language === "en"}
					className={`font-display font-bold text-3xl md:text-base ${
						i18n.language === "en"
							? "text-secondary-content underline"
							: "text-neutral hover:text-secondary-content transition-colors"
					}`}>
					en
				</button>
				<span className="font-medium px-2 text-neutral text-3xl md:text-base" aria-hidden="true">
					/
				</span>
				<button
					onClick={() => changeLanguage("da")}
					aria-label={t("switchToDanish")}
					aria-pressed={i18n.language === "da"}
					className={`font-display font-bold text-3xl md:text-base ${
						i18n.language === "da"
							? "text-secondary-content underline"
							: "text-neutral hover:text-secondary-content transition-colors"
					}`}>
					da
				</button>
			</div>
		</div>
	);
}
