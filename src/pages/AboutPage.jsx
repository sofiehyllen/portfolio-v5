import { useTranslation } from "react-i18next";
import PageLayout from "../components/wrappers/PageLayout";
import Timeline from "../components/Timeline";

export default function AboutPage() {
	const { t } = useTranslation("pages");

	return (
		<PageLayout title={t("about.title")} subtitle={t("about.subtitle")}>
			<Timeline></Timeline>
		</PageLayout>
	);
}
