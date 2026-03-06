import { useTranslation } from 'react-i18next';

export default function LanguageButton() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div className='flex items-end pb-0.5'>
            <button
                onClick={() => changeLanguage('en')}
                className={`font-display font-bold ${
                    i18n.language === 'en'
                        ? 'text-[#161621] underline dark:text-white'
                        : 'text-[#5D5D89]'
                }`}>
                en
            </button>
            <span className='font-medium px-2 text-[#5D5D89]'>/</span>
            <button
                onClick={() => changeLanguage('da')}
                className={`font-display font-bold ${
                    i18n.language === 'da'
                        ? 'text-[#161621] underline dark:text-white'
                        : 'text-[#5D5D89]'
                }`}>
                da
            </button>
        </div>
    );
}
