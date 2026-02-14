import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-menu-btn" onClick={onMenuClick}>
          ☰
        </button>
        <div className="navbar-logos">
          <img 
            src="/public/images/udslogo.jpg" 
            alt="UDS Logo" 
            className="navbar-logo"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <img 
            src="/public/images/gmsalogo.jpg" 
            alt="GMSA Logo" 
            className="navbar-logo"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="navbar-title">Noorul Haq</div>
        <div className="navbar-search">
          <span className="navbar-search-icon">🔍</span>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="navbar-right">
        <button className="navbar-icon-btn" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button className="navbar-icon-btn">
          🔔
          <span className="navbar-notification-badge" />
        </button>
        
        {user ? (
          <>
            <div className="navbar-profile">
              <div className="navbar-profile-avatar">
                {user.email.charAt(0).toUpperCase()}
              </div>
              <span className="navbar-profile-name">{user.email.split('@')[0]}</span>
            </div>
            <button className="navbar-logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <div className="navbar-auth-buttons">
            <button className="navbar-login-btn" onClick={() => navigate('/login')}>
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
