import { Link } from 'react-router-dom';
import LanguageButton from './LanguageButton';
import Navigation from './Navigation';
import ThemeButton from './ThemeButton';
import { IoIosRocket } from 'react-icons/io';

export default function Header() {
    return (
        <header className='flex justify-between'>
            <div className='flex space-x-16 items-end'>
                <Link to="/" className='flex text-4xl font-bold text-primary'>
                    <IoIosRocket className='inline-block mr-2' />
                    sofie hyllen
                </Link>
                <Navigation />
            </div>
            <div className='flex space-x-7'>
                <ThemeButton />
                <LanguageButton />
            </div>
        </header>
    );
}
