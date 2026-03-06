import LanguageButton from './LanguageButton';
import Navigation from './Navigation';
import ThemeButton from './ThemeButton';
import { IoIosRocket } from 'react-icons/io';

export default function Header() {
    return (
        <header className='flex justify-between'>
            <div className='flex space-x-16 items-end'>
                <a className='flex text-4xl font-bold text-primary' href='#'>
                    <IoIosRocket className='inline-block mr-2' />
                    sofie hyllen
                </a>
                <Navigation />
            </div>
            <div className='flex space-x-7'>
                <ThemeButton />
                <LanguageButton />
            </div>
        </header>
    );
}
