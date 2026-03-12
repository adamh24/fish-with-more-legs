import { Link } from 'react-router-dom';
import '../Style/FeatureCards.css';

const cards = [
  {
    to: '/recipes',
    title: 'Cocktail Recipes',
    label: 'Explore',
    tagline: 'From classics to originals',
    bg: 'feature-bg-recipes',
  },
  {
    to: '/courses',
    title: 'Courses',
    label: 'Train',
    tagline: 'Professional development programmes',
    bg: 'feature-bg-courses',
  },
  {
    to: null,
    title: 'This Season',
    label: 'Coming Soon',
    tagline: 'New menus. New ideas.',
    bg: 'feature-bg-season',
  },
];

function FeatureCards() {
  return (
    <section className="feature-cards-section">
      {cards.map((card, i) =>
        card.to ? (
          <Link key={i} to={card.to} className={`feature-card ${card.bg}`}>
            <div className="feature-card-overlay" />
            <div className="feature-card-body">
              <span className="feature-card-label">{card.label}</span>
              <h3 className="feature-card-title">{card.title}</h3>
              <p className="feature-card-tagline">{card.tagline}</p>
            </div>
          </Link>
        ) : (
          <div key={i} className={`feature-card ${card.bg}`}>
            <div className="feature-card-overlay" />
            <div className="feature-card-body">
              <span className="feature-card-label">{card.label}</span>
              <h3 className="feature-card-title">{card.title}</h3>
              <p className="feature-card-tagline">{card.tagline}</p>
            </div>
          </div>
        )
      )}
    </section>
  );
}

export default FeatureCards;
