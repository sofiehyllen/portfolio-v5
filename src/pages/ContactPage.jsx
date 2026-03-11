import { useTranslation } from "react-i18next";
import PageLayout from "../components/wrappers/PageLayout";

export default function ContactPage() {
	const { t } = useTranslation("pages");

	return (
		<PageLayout
			title={t("contact.title")}
			subtitle={t("contact.subtitle")}
		></PageLayout>
	);
}
