import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="layout-main">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="layout-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
