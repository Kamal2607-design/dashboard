import { useEffect } from 'react';
import './Toast.css';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className={`toast toast-${toast.type}`} role="alert">
      <div className="toast-body">
        <strong className="toast-title">{toast.title}</strong>
        <p className="toast-message">{toast.message}</p>
      </div>
      <button type="button" className="toast-close" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>
  );
}
