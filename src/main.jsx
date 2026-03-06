import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n.js';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <section className='h-screen bg-light bg-no-repeat bg-cover dark:bg-dark'>
            <div className='p-12'><App /></div>
        </section>
    </StrictMode>,
);
