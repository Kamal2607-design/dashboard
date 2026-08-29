import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Toast from './Toast';
import { useAuth } from '../context/AuthContext';
import './Layout.css';

export default function Layout() {
  const { user, toast, clearToast } = useAuth();

  return (
    <div className="app-shell">
      <Sidebar user={user} />
      <div className="app-main">
        <Outlet />
        <footer className="app-footer">
          <div className="network-status">
            <span className="status-dot" />
            Network Status : Online
          </div>
          <p className="copyright">
            Copyright © 2025 Sterna Security Devices Private Limited. All rights reserved.
          </p>
          <span className="version">VERSION : 2.0.2</span>
        </footer>
      </div>
      <Toast toast={toast} onClose={clearToast} />
    </div>
  );
}
