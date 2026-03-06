import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='*' element={<HomePage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
