import { useAuth } from '../context/AuthContext';
import {
  dashboardStats,
  assetsInStock,
  highestLockOpenings,
  lockStatusCount,
} from '../data/mockData';
import './Dashboard.css';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function formatDateTime(date) {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  return date.toLocaleString('en-IN', options).replace(',', '');
}

export default function Dashboard() {
  const { user } = useAuth();
  const name = user?.name || 'Leo';
  const now = new Date();

  return (
    <div className="dashboard-page">
      <header className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <div className="header-user">
          <span className="greeting">
            {getGreeting()}, {name}
          </span>
          <span className="datetime">{formatDateTime(now)}</span>
        </div>
      </header>

      <div className="stats-row">
        {dashboardStats.map((stat) => (
          <div
            key={stat.label}
            className="stat-card"
            style={{ backgroundColor: stat.color }}
          >
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="panels-row">
        <div className="panel">
          <h2 className="panel-title">ASSETS IN STOCK</h2>
          <ul className="panel-list">
            {assetsInStock.map((item) => (
              <li key={item.id} className="panel-list-item">
                <span className="item-name">{item.name}</span>
                <span className="item-meta">
                  Qty {item.qty} · {item.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <h2 className="panel-title">HIGHEST LOCK OPENINGS (LAST 7 DAYS)</h2>
          <ul className="panel-list">
            {highestLockOpenings.map((item) => (
              <li key={item.id} className="panel-list-item">
                <span className="item-name">{item.lockName}</span>
                <span className="item-badge">{item.openings}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <h2 className="panel-title">LOCK STATUS COUNT</h2>
          <ul className="panel-list">
            {lockStatusCount.map((item) => (
              <li key={item.status} className="panel-list-item">
                <span className="item-name">
                  <span
                    className="status-dot-inline"
                    style={{ backgroundColor: item.color }}
                  />
                  {item.status}
                </span>
                <span className="item-badge">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
