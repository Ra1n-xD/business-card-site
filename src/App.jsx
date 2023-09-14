import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './utils/scrollToTop';

import Home from './components/pages/Home';
import Tricks from './components/pages/Tricks';
import Contacts from './components/pages/Contacts';
import TaskJs from './components/pages/TaskJs';
import TrickPage from './components/pages/TricksPage';


import './styles/main.css';

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tricks" element={<Tricks />} />
                    <Route path="/tricks/:id" element={<TrickPage />} />
                    <Route path="/task" element={<TaskJs />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
