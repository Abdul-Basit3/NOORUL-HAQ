import { Routes, Route, NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import PrayerTimesAdmin from './PrayerTimesAdmin';
import ContentAdmin from './ContentAdmin';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { theme, toggleTheme } = useTheme();

  const adminModules = [
    { path: '', label: 'Overview', icon: '📊' },
    { path: 'prayer-times', label: 'Prayer Times', icon: '🕐' },
    { path: 'lectures', label: 'Lectures', icon: '🎥' },
    { path: 'courses', label: 'Courses', icon: '📚' },
    { path: 'projects', label: 'Projects', icon: '🤲' },
    { path: 'activities', label: 'Activities', icon: '📅' },
    { path: 'executives', label: 'Executives', icon: '👥' },
    { path: 'faq', label: 'FAQ', icon: '❓' },
    { path: 'about', label: 'About', icon: 'ℹ️' },
  ];

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div className="admin-logo">
            <span className="admin-logo-icon">🔐</span>
            <span>Admin Panel</span>
          </div>
        </div>
        <nav className="admin-nav">
          {adminModules.map((module) => (
            <NavLink
              key={module.path}
              to={`/admin/${module.path}`}
              className={({ isActive }) =>
                `admin-nav-item ${isActive ? 'active' : ''}`
              }
              end={module.path === ''}
            >
              <span className="admin-nav-icon">{module.icon}</span>
              <span>{module.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="admin-main">
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
          <div className="admin-header-actions">
            <button className="admin-icon-btn" onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button className="admin-icon-btn">🔔</button>
            <a href="/" className="admin-icon-btn">🏠</a>
          </div>
        </header>

        <main className="admin-content">
          <Routes>
            <Route index element={<AdminOverview />} />
            <Route path="prayer-times" element={<PrayerTimesAdmin />} />
            <Route path="lectures" element={<ContentAdmin type="lectures" title="Lectures Management" />} />
            <Route path="courses" element={<ContentAdmin type="courses" title="Courses Management" />} />
            <Route path="projects" element={<ContentAdmin type="projects" title="Projects Management" />} />
            <Route path="activities" element={<ContentAdmin type="activities" title="Activities Management" />} />
            <Route path="executives" element={<ContentAdmin type="executives" title="Executives Management" />} />
            <Route path="faq" element={<ContentAdmin type="faqs" title="FAQ Management" />} />
            <Route path="about" element={<AdminModule title="About Content Management" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const AdminOverview = () => {
  const stats = [
    { label: 'Total Users', value: '2,450', icon: '👥', color: '#059669' },
    { label: 'Active Courses', value: '24', icon: '📚', color: '#d97706' },
    { label: 'Upcoming Events', value: '8', icon: '📅', color: '#0891b2' },
    { label: 'Total Donations', value: '$133K', icon: '💰', color: '#7c3aed' },
  ];

  return (
    <div className="admin-overview">
      <div className="admin-stats">
        {stats.map((stat, index) => (
          <div key={index} className="admin-stat-card" style={{ borderLeftColor: stat.color }}>
            <div className="admin-stat-icon" style={{ background: stat.color }}>
              {stat.icon}
            </div>
            <div className="admin-stat-info">
              <div className="admin-stat-value">{stat.value}</div>
              <div className="admin-stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-section">
        <h2>Quick Actions</h2>
        <div className="admin-actions">
          <button className="admin-action-btn">➕ Add Lecture</button>
          <button className="admin-action-btn">📝 Create Event</button>
          <button className="admin-action-btn">📢 Post Announcement</button>
          <button className="admin-action-btn">👤 Add Executive</button>
        </div>
      </div>
    </div>
  );
};

const AdminModule = ({ title }: { title: string }) => {
  return (
    <div className="admin-module">
      <div className="admin-module-header">
        <h2>{title}</h2>
        <button className="btn btn-primary">➕ Add New</button>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Sample Entry</td>
              <td><span className="status-badge active">Active</span></td>
              <td>Feb 14, 2026</td>
              <td>
                <button className="admin-table-btn">✏️</button>
                <button className="admin-table-btn">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
