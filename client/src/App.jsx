import './App.css'
import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './Pages/SignUpPage';
import { ToastContainer } from 'react-toastify';
import CommingSoon from './Pages/CommingSoon';
import NotFound from './Pages/NotFound';
import CreatePage from './Pages/CreatePage';
import Dashboard from './Pages/Dashboard';
import PortfolioOne from './Pages/PortfolioOne';
import DomainPage from './Pages/DomainPage';

function App() {
  return (
    <Router>
        <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/domain/:id" element={<DomainPage />} />
          <Route path="/view/:id" element={<PortfolioOne />} />
          <Route path="/commingsoon" element={<CommingSoon />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        <ToastContainer />
      </Router>
  )
}

export default App
