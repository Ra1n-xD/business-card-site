import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './utils/scrollToTop';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contacts from './components/pages/Contacts';
import ProjectPage from './components/pages/ProjectPage';


import './styles/main.css';

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tricks" element={<Projects />} />s
                    <Route path="/tricks/:id" element={<ProjectPage />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
