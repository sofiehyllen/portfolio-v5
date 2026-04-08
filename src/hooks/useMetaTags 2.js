import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useMetaTags() {
	const { t, i18n } = useTranslation("pages");

	useEffect(() => {
		const title = t("meta.title");
		const description = t("meta.description");

		document.title = title;
		document.documentElement.lang = i18n.language;

		document.querySelector('meta[name="description"]')?.setAttribute("content", description);
		document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
		document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
	}, [i18n.language, t]);
}
