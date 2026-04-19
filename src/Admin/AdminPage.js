import { Link } from 'react-router-dom';

function AdminPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(6, 10, 7)' }}>
      <Link to='/bar-plan' style={{ padding: '0.85rem 2rem', border: '1px solid rgb(82, 183, 136)', color: 'rgb(82, 183, 136)', fontFamily: "'DM Mono', monospace", fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s ease, color 0.2s ease' }}
        onMouseEnter={e => { e.target.style.background = 'rgb(82, 183, 136)'; e.target.style.color = 'rgb(6, 10, 7)'; }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'rgb(82, 183, 136)'; }}>
        Bar Plan
      </Link>
    </div>
  );
}

export default AdminPage;