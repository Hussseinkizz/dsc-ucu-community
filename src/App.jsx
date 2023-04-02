import './styles/index.css';
import './styles/Auth.css'; // renamed from j's App.css
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Layout from './components/Layout';
import SampleLogin from './pages/SampleLogin';
// import Auth from './pages/Auth';
// import Login from './pages/Login';
// import MainLayout from './components/layout/MainLayout';
// import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sampleLogin" element={<SampleLogin />} />
          {/* <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/admin-dashboard" element={<MainLayout />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
