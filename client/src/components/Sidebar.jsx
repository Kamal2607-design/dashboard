import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function DashboardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 14h4v6H4zM10 4h4v16h-4zM16 9h4v11h-4z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: DashboardIcon },
  { to: '/locations', label: 'Locations', icon: LocationIcon },
];

export default function Sidebar({ user }) {
  const initial = user?.name?.[0]?.toUpperCase() || 'L';

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">SELYEK</div>

      <nav className="sidebar-nav">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `sidebar-item${isActive ? ' active' : ''}`}
          >
            <Icon />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-avatar" title={user?.name || 'User'}>
          {initial}
        </div>
      </div>
    </aside>
  );
}
