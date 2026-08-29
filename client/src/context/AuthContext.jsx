import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('selyek_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem('selyek_user');
      }
    }
    setReady(true);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('selyek_user', JSON.stringify(userData));
    setToast({ type: 'success', title: 'Success', message: 'Login successful' });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('selyek_user');
  };

  const clearToast = () => setToast(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, toast, clearToast, ready }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
