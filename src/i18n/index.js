// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import daNavigation from "./da/navigation.json";
import daPages from "./da/pages.json";
import daProjects from "./da/projects.json";
import enNavigation from "./en/navigation.json";
import enPages from "./en/pages.json";
import enProjects from "./en/projects.json";

i18n.use(initReactI18next).init({
	lng: "da",
	fallbackLng: "en",

	ns: ["navigation", "pages", "projects"],

	resources: {
		da: {
			navigation: daNavigation,
			pages: daPages,
			projects: daProjects,
		},
		en: {
			navigation: enNavigation,
			pages: enPages,
			projects: enProjects,
		},
	},

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
