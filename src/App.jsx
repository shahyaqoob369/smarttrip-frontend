import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ServicePageLayout from './components/ServicePageLayout'; // Import the new layout
import ProtectedRoute from './components/ProtectedRoute';

// Import Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

// Import all service pages
import HotelsPage from './pages/HotelsPage';
import FlightsPage from './pages/FlightsPage';
import CarsPage from './pages/CarsPage';
import HostelsPage from './pages/HostelsPage';
import VacationRentalsPage from './pages/VacationRentalsPage';
import TransfersPage from './pages/TransfersPage';
import TrainsBusesPage from './pages/TrainsBusesPage';
import ActivitiesPage from './pages/ActivitiesPage';
import CruisesPage from './pages/CruisesPage';
import InsurancePage from './pages/InsurancePage';
import EsimPage from './pages/EsimPage';
import CompensationPage from './pages/CompensationPage';

const App = () => {
  return (
    <Routes>
      {/* --- Homepage uses the simple MainLayout (no header) --- */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />


      <Route path="/about" element={<ServicePageLayout><AboutPage /></ServicePageLayout>} />
      <Route path="/contact" element={<ServicePageLayout><ContactPage /></ServicePageLayout>} /> {/* 2. Add the new route */}
      
      
      {/* --- ALL other pages use the new ServicePageLayout (with the small header) --- */}
      <Route path="/hotels" element={<ServicePageLayout><HotelsPage /></ServicePageLayout>} />
      <Route path="/flights" element={<ServicePageLayout><FlightsPage /></ServicePageLayout>} />
      <Route path="/cars" element={<ServicePageLayout><CarsPage /></ServicePageLayout>} />
      <Route path="/hostels" element={<ServicePageLayout><HostelsPage /></ServicePageLayout>} />
      <Route path="/vacation-rentals" element={<ServicePageLayout><VacationRentalsPage /></ServicePageLayout>} />
      <Route path="/transfers" element={<ServicePageLayout><TransfersPage /></ServicePageLayout>} />
      <Route path="/trains-buses" element={<ServicePageLayout><TrainsBusesPage /></ServicePageLayout>} />
      <Route path="/activities" element={<ServicePageLayout><ActivitiesPage /></ServicePageLayout>} />
      <Route path="/cruises" element={<ServicePageLayout><CruisesPage /></ServicePageLayout>} />
      <Route path="/insurance" element={<ServicePageLayout><InsurancePage /></ServicePageLayout>} />
      <Route path="/esim" element={<ServicePageLayout><EsimPage /></ServicePageLayout>} />
      <Route path="/compensation" element={<ServicePageLayout><CompensationPage /></ServicePageLayout>} />

      {/* --- Standalone Pages (no layout at all) --- */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;

