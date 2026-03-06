import { useTranslation } from 'react-i18next';

export default function Navigation() {
    const { t } = useTranslation();

    return (
        <nav className='pb-0.5'>
            <ul className='flex space-x-10'>
                <li>
                    <a className='font-display font-bold' href='#'>
                        {t('projects')}
                    </a>
                </li>
                <li>
                    <a className='font-display font-bold' href='#'>
                        {t('about')}
                    </a>
                </li>
                <li>
                    <a className='font-display font-bold' href='/contact'>
                        {t('contact')}
                    </a>
                </li>
            </ul>
        </nav>
    );
}
