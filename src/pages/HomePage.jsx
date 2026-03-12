import { useTranslation } from "react-i18next";
import PageLayout from "../components/wrappers/PageLayout";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";

export default function HomePage() {
	const { t } = useTranslation("pages");

	return (
		<PageLayout title={t("home.title")} subtitle={t("home.subtitle")}>
			<Link to="/contact">
				<Button variant="primary">{t("home.title")}</Button>
			</Link>
		</PageLayout>
	);
}
