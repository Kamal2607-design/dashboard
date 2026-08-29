export const dashboardStats = [
  { label: 'TOTAL ASSETS', value: 12, color: '#3B9EFF' },
  { label: 'TOTAL LOCATIONS', value: 3, color: '#4CAF50' },
  { label: 'TOTAL ACCESS', value: 28, color: '#FF9800' },
  { label: 'TOTAL USERS', value: 7, color: '#E91E8C' },
  { label: 'TOTAL LOCK GROUPS', value: 4, color: '#5A5A5A' },
  { label: 'TOTAL USER GROUPS', value: 2, color: '#9C27B0' },
];

export const assetsInStock = [
  { id: 1, name: 'Padlock XL-200', qty: 5, status: 'Available' },
  { id: 2, name: 'Smart Lock SL-50', qty: 3, status: 'Available' },
  { id: 3, name: 'Gateway GW-10', qty: 4, status: 'Reserved' },
];

export const highestLockOpenings = [
  { id: 1, lockName: 'Gate Lock A1', openings: 42 },
  { id: 2, lockName: 'Warehouse B2', openings: 31 },
  { id: 3, lockName: 'Office Door C3', openings: 18 },
];

export const lockStatusCount = [
  { status: 'Locked', count: 8, color: '#4CAF50' },
  { status: 'Unlocked', count: 2, color: '#FF9800' },
  { status: 'Offline', count: 2, color: '#E74C3C' },
];

export const locations = [
  {
    id: 1,
    name: 'R S Puram',
    city: 'Coimbatore',
    initial: 'R',
  },
  {
    id: 2,
    name: 'Peelamedu',
    city: 'Coimbatore',
    initial: 'P',
  },
  {
    id: 3,
    name: 'Gandhipuram',
    city: 'Coimbatore',
    initial: 'G',
  },
];

export const lockMappings = [
  {
    id: 1,
    locationId: 1,
    lockName: 'Gate Lock A1',
    assetMarking: 'AST-001',
    lockType: 'Padlock',
    battery: 87,
    lastCommunicated: '28 Aug 2025, 10:22:15 am',
    createdBy: 'Leo',
    act: 'View',
  },
  {
    id: 2,
    locationId: 1,
    lockName: 'Warehouse B2',
    assetMarking: 'AST-014',
    lockType: 'Smart Lock',
    battery: 64,
    lastCommunicated: '28 Aug 2025, 09:05:41 am',
    createdBy: 'Admin',
    act: 'View',
  },
  {
    id: 3,
    locationId: 1,
    lockName: 'Office Door C3',
    assetMarking: 'AST-022',
    lockType: 'Cylinder',
    battery: 92,
    lastCommunicated: '27 Aug 2025, 06:48:03 pm',
    createdBy: 'Leo',
    act: 'View',
  },
  {
    id: 4,
    locationId: 2,
    lockName: 'Main Entry D1',
    assetMarking: 'AST-031',
    lockType: 'Padlock',
    battery: 55,
    lastCommunicated: '28 Aug 2025, 08:11:20 am',
    createdBy: 'Admin',
    act: 'View',
  },
  {
    id: 5,
    locationId: 3,
    lockName: 'Parking Gate E2',
    assetMarking: 'AST-045',
    lockType: 'Smart Lock',
    battery: 78,
    lastCommunicated: '28 Aug 2025, 11:30:00 am',
    createdBy: 'Leo',
    act: 'View',
  },
];

export const lockGroups = [
  { id: 1, name: 'Perimeter Locks', locks: 4, locationId: 1 },
  { id: 2, name: 'Internal Doors', locks: 2, locationId: 1 },
];

export const geofences = [
  { id: 1, name: 'R S Puram Zone', radius: '250 m', status: 'Active', locationId: 1 },
  { id: 2, name: 'Warehouse Fence', radius: '100 m', status: 'Active', locationId: 1 },
];

export const gatewayMappings = [
  { id: 1, name: 'GW-RS-01', ip: '192.168.1.10', status: 'Online', locationId: 1 },
  { id: 2, name: 'GW-RS-02', ip: '192.168.1.11', status: 'Online', locationId: 1 },
];

export const LOCATION_TABS = [
  'Lock Mapping',
  'Lock Group',
  'Geofence',
  'Gateway Mapping',
];
