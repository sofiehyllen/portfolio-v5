import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Navigation() {
    const { t } = useTranslation();

    return (
        <nav className='pb-0.5 flex space-x-10'>
            <Link to="/projects" className='font-display font-bold'>{t('projects')}</Link>
            <Link to="/about" className='font-display font-bold'>{t('about')}</Link>
            <Link to="/contact" className='font-display font-bold'>{t('contact')}</Link>
        </nav>
    );
}
