import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Admin/AdminGate.css';

const ADMIN_PASSWORD = '3lSantoSucks8=D';

function AdminGate() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === ADMIN_PASSWORD) {
      navigate('/admin');
      return;
    }

    setError('Incorrect password');
  };

  return (
    <div className="admin-gate">
      <div className="admin-gate-card">
        <h1 className="admin-gate-title">Admin Access</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="admin-gate-input"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError('');
            }}
            placeholder="Enter admin password"
            aria-label="Admin password"
          />
          {error && <p className="admin-gate-error">{error}</p>}
          <button className="admin-gate-button" type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default AdminGate;