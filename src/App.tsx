import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Lectures from './pages/Lectures';
import Courses from './pages/Courses';
import Projects from './pages/Projects';
import Activities from './pages/Activities';
import Executives from './pages/Executives';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ContentProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/secret-admin-access-2026" element={<AdminLogin />} />
              <Route 
                path="/admin/*" 
                element={
                  <ProtectedRoute requireAdmin>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="lectures" element={<Lectures />} />
                <Route path="courses" element={<Courses />} />
                <Route path="projects" element={<Projects />} />
                <Route path="activities" element={<Activities />} />
                <Route path="executives" element={<Executives />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="about" element={<About />} />
              </Route>
            </Routes>
          </Router>
        </ContentProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
