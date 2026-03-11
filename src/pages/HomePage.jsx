import { useTranslation } from "react-i18next";
import PageLayout from "../components/wrappers/PageLayout";

export default function HomePage() {
    const { t } = useTranslation('pages');

    return (
        <PageLayout title={t('home.title')} subtitle={t('home.subtitle')}>
        </PageLayout>
    );
}
