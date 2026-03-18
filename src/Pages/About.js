import '../Style/About.css';
import aboutData from '../data/about.json';

const { team, values } = aboutData;
const teamWithoutFounder = team.filter(member => !/founder/i.test(member.role));

// Resolve avatar images from src/Assets (CRA needs import/require for bundling)
const avatarContext = require.context('../Assets', false, /\.(png|jpe?g|svg)$/);
const leprechaunAvatar = (() => {
  try {
    return avatarContext('./leprechaun.png');
  } catch {
    return null;
  }
})();

const getAvatar = (filename) => {
  if (!filename) return leprechaunAvatar;
  try {
    return avatarContext(`./${filename}`);
  } catch {
    return leprechaunAvatar;
  }
};

function About() {
  return (
    <div className="about-container">

      {/* ── Hero Block ── */}
      <div className="about-hero">
        <span className="about-pre-title">Our Story</span>
        <span className="about-title">Fish With Legs</span>
        <p className="about-intro">
          Born from a love of great drinks and honest hospitality, Fish with Legs is a platform for bartenders, enthusiasts, and curious minds who believe that what goes into a glass matters — and so does how it gets there.
        </p>
      </div>

      {/* ── Divider Banner ── */}
      <div className="about-banner" aria-hidden="true">
        <div className="about-banner-track">
          {[...Array(6)].map((_, i) => (
            <span className="about-banner-item" key={i}>
              {values.map(v => v.label).join(' · ')} &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Founder Spotlight ── */}
      <section className="about-section about-founder-section">
        <span className="about-section-label">Founder</span>
        <div className="about-founder">
          {team.filter(member => /founder/i.test(member.role)).map((member, i) => (
            <div className="about-founder-card" key={i}>
              <div className="about-founder-avatar">
                <img
                  src={getAvatar(member.avatar)}
                  alt={member.avatar ? member.name : 'Leprechaun'}
                />
              </div>
              <div className="about-founder-info">
                <h3 className="about-founder-name">{member.name}</h3>
                <span className="about-founder-role">{member.role}</span>
                <p className="about-founder-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-section">
        <span className="about-section-label">What We Stand For</span>
        <div className="about-values">
          {values.map((v, i) => (
            <div className="about-value-card" key={i}>
              <h3 className="about-value-title">{v.label}</h3>
              <p className="about-value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-section">
        <span className="about-section-label">The Team</span>
        <div className="about-team">
          {teamWithoutFounder.map((member, i) => (
            <div className="about-team-card" key={i}>
              <div className="about-team-avatar">
                <img
                  src={getAvatar(member.avatar)}
                  alt={member.avatar ? member.name : 'Leprechaun'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="about-team-info">
                <h3 className="about-team-name">{member.name}</h3>
                <span className="about-team-role">{member.role}</span>
                <p className="about-team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;