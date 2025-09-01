import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import HotelsPage from './pages/HotelsPage';

// Import all the new service pages
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


function App() {
  return (
    <Routes>
      {/* Public Routes with Main Layout */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
      
      {/* Service Pages with Main Layout */}
      <Route path="/hotels" element={<MainLayout><HotelsPage /></MainLayout>} />
      <Route path="/flights" element={<MainLayout><FlightsPage /></MainLayout>} />
      <Route path="/cars" element={<MainLayout><CarsPage /></MainLayout>} />
      <Route path="/hostels" element={<MainLayout><HostelsPage /></MainLayout>} />
      <Route path="/vacation-rentals" element={<MainLayout><VacationRentalsPage /></MainLayout>} />
      <Route path="/transfers" element={<MainLayout><TransfersPage /></MainLayout>} />
      <Route path="/trains-buses" element={<MainLayout><TrainsBusesPage /></MainLayout>} />
      <Route path="/activities" element={<MainLayout><ActivitiesPage /></MainLayout>} />
      <Route path="/cruises" element={<MainLayout><CruisesPage /></MainLayout>} />
      <Route path="/insurance" element={<MainLayout><InsurancePage /></MainLayout>} />
      <Route path="/esim" element={<MainLayout><EsimPage /></MainLayout>} />
      <Route path="/compensation" element={<MainLayout><CompensationPage /></MainLayout>} />

      {/* Standalone Login Page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Admin Route */}
      <Route
        path="/admin/dashboard"
        element={ <ProtectedRoute> <DashboardPage /> </ProtectedRoute> }
      />
    </Routes>
  );
}

export default App;