
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n.js';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
        // <div className='min-h-screen bg-light bg-no-repeat bg-cover dark:bg-dark'>
        //     <div className='p-12'><App /></div>
        // </div>

);
