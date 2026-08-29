import { useMemo, useState } from 'react';
import {
  locations,
  lockMappings,
  lockGroups,
  geofences,
  gatewayMappings,
  LOCATION_TABS,
} from '../data/mockData';
import './Locations.css';

export default function Locations() {
  const [selectedId, setSelectedId] = useState(locations[0]?.id ?? null);
  const [listSearch, setListSearch] = useState('');
  const [tableSearch, setTableSearch] = useState('');
  const [activeTab, setActiveTab] = useState(LOCATION_TABS[0]);

  const filteredLocations = useMemo(() => {
    const q = listSearch.trim().toLowerCase();
    if (!q) return locations;
    return locations.filter(
      (loc) =>
        loc.name.toLowerCase().includes(q) ||
        loc.city.toLowerCase().includes(q)
    );
  }, [listSearch]);

  const selected = locations.find((l) => l.id === selectedId) || filteredLocations[0];

  const locationLocks = useMemo(() => {
    if (!selected) return [];
    return lockMappings.filter((row) => row.locationId === selected.id);
  }, [selected]);

  const filteredLocks = useMemo(() => {
    const q = tableSearch.trim().toLowerCase();
    if (!q) return locationLocks;
    return locationLocks.filter((row) =>
      Object.values(row).some((v) => String(v).toLowerCase().includes(q))
    );
  }, [tableSearch, locationLocks]);

  const locationLockGroups = useMemo(() => {
    if (!selected) return [];
    return lockGroups.filter((g) => g.locationId === selected.id);
  }, [selected]);

  const locationGeofences = useMemo(() => {
    if (!selected) return [];
    return geofences.filter((g) => g.locationId === selected.id);
  }, [selected]);

  const locationGateways = useMemo(() => {
    if (!selected) return [];
    return gatewayMappings.filter((g) => g.locationId === selected.id);
  }, [selected]);

  return (
    <div className="locations-page">
      <aside className="locations-list-pane">
        <div className="list-pane-header">
          <h2>Locations</h2>
          <button type="button" className="add-btn" aria-label="Add location">
            +
          </button>
        </div>

        <div className="list-search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
          <input
            type="text"
            placeholder="Enter search term"
            value={listSearch}
            onChange={(e) => setListSearch(e.target.value)}
          />
        </div>

        <ul className="location-items">
          {filteredLocations.map((loc) => (
            <li key={loc.id}>
              <button
                type="button"
                className={`location-item${selected?.id === loc.id ? ' selected' : ''}`}
                onClick={() => setSelectedId(loc.id)}
              >
                <span className="loc-avatar">{loc.initial}</span>
                <span className="loc-text">
                  <span className="loc-name">{loc.name}</span>
                  <span className="loc-city">{loc.city}</span>
                </span>
              </button>
            </li>
          ))}
          {filteredLocations.length === 0 && (
            <li className="no-locations">No locations found</li>
          )}
        </ul>
      </aside>

      <section className="locations-detail">
        {selected ? (
          <>
            <h1 className="detail-title">{selected.name}</h1>

            <div className="detail-tabs">
              {LOCATION_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`detail-tab${activeTab === tab ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="detail-card">
              <div className="detail-card-header">
                <h2>{activeTab}</h2>
                <div className="detail-card-actions">
                  <button type="button" className="btn-add-mapping">
                    + Lock Mapping
                  </button>
                  <div className="table-search">
                    <input
                      type="text"
                      placeholder="Search"
                      value={tableSearch}
                      onChange={(e) => setTableSearch(e.target.value)}
                    />
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="16.5" y1="16.5" x2="21" y2="21" />
                    </svg>
                  </div>
                </div>
              </div>

              {activeTab === 'Lock Mapping' && (
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>S.NO</th>
                        <th>LOCK NAME</th>
                        <th>ASSET MARKING</th>
                        <th>LOCK TYPE</th>
                        <th>BATTERY PERCENTAGE</th>
                        <th>LAST COMMUNICATED DATE &amp; TIME</th>
                        <th>CREATED BY</th>
                        <th>ACT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLocks.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="empty-cell">
                            No results found
                          </td>
                        </tr>
                      ) : (
                        filteredLocks.map((row, idx) => (
                          <tr key={row.id || idx}>
                            <td>{idx + 1}</td>
                            <td>{row.lockName}</td>
                            <td>{row.assetMarking}</td>
                            <td>{row.lockType}</td>
                            <td>{row.battery}%</td>
                            <td>{row.lastCommunicated}</td>
                            <td>{row.createdBy}</td>
                            <td>
                              <button type="button" className="act-link">
                                {row.act}
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'Lock Group' && (
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>S.NO</th>
                        <th>GROUP NAME</th>
                        <th>LOCKS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {locationLockGroups.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="empty-cell">No results found</td>
                        </tr>
                      ) : (
                        locationLockGroups.map((row, idx) => (
                          <tr key={row.id}>
                            <td>{idx + 1}</td>
                            <td>{row.name}</td>
                            <td>{row.locks}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'Geofence' && (
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>S.NO</th>
                        <th>NAME</th>
                        <th>RADIUS</th>
                        <th>STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {locationGeofences.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="empty-cell">No results found</td>
                        </tr>
                      ) : (
                        locationGeofences.map((row, idx) => (
                          <tr key={row.id}>
                            <td>{idx + 1}</td>
                            <td>{row.name}</td>
                            <td>{row.radius}</td>
                            <td>{row.status}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'Gateway Mapping' && (
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>S.NO</th>
                        <th>GATEWAY</th>
                        <th>IP</th>
                        <th>STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {locationGateways.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="empty-cell">No results found</td>
                        </tr>
                      ) : (
                        locationGateways.map((row, idx) => (
                          <tr key={row.id}>
                            <td>{idx + 1}</td>
                            <td>{row.name}</td>
                            <td>{row.ip}</td>
                            <td>{row.status}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="no-selection">Select a location</div>
        )}
      </section>
    </div>
  );
}
