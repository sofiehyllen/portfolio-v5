import { useTranslation } from "react-i18next";
import PageLayout from "../components/wrappers/PageLayout";

export default function AboutPage() {
	const { t } = useTranslation("pages");

	return (
		<PageLayout
			title={t("about.title")}
			subtitle={t("about.subtitle")}
		></PageLayout>
	);
}
