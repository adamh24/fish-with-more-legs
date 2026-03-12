import { useState } from 'react';
import ReactDOM from 'react-dom';
import cocktailsData from '../data/cocktails.json';
import modifiersData from '../data/modifiers.json';
import '../Style/Recipes.css';

// ─── Cocktail Detail Panel ────────────────────────────────────────────────────

function CocktailDetail({ cocktail, onClose }) {
  if (!cocktail) return null;

  return ReactDOM.createPortal(
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-panel" onClick={e => e.stopPropagation()}>

        <button className="detail-close" onClick={onClose}>✕</button>

        <div className="detail-meta">
          <span className="menu-badge">{cocktail.menu}</span>
          {cocktail.featured && <span className="featured-badge">Featured</span>}
        </div>

        <h2 className="detail-title">{cocktail.title}</h2>

        {cocktail.description && (
          <p className="detail-description">{cocktail.description}</p>
        )}

        {cocktail.flavors && (
          <div className="detail-flavors">
            {cocktail.flavors.map(f => (
              <span key={f} className="flavor-tag">{f}</span>
            ))}
          </div>
        )}

        {cocktail.ingredients && (
          <div className="detail-section">
            <h3>Ingredients</h3>
            <ul>
              {cocktail.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>
          </div>
        )}

        {cocktail.instructions && (
          <div className="detail-section">
            <h3>Instructions</h3>
            <ol>
              {cocktail.instructions.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
          </div>
        )}

        {cocktail.pairings && (
          <div className="detail-section">
            <h3>Pairings</h3>
            <ul>
              {cocktail.pairings.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        )}

        {cocktail.notes && (
          <div className="detail-section">
            <h3>Notes</h3>
            <ul>
              {cocktail.notes.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

// ─── Cocktail Card ────────────────────────────────────────────────────────────

function CocktailCard({ cocktail, onClick }) {
  return (
    <div className="cocktail-card" onClick={() => onClick(cocktail)}>
      <div className="card-image">
        <img src={cocktail.image} alt={cocktail.title} />
        {cocktail.featured && <span className="featured-badge">Featured</span>}
      </div>
      <div className="card-body">
        <span className="menu-badge">{cocktail.menu}</span>
        <h3 className="card-title">{cocktail.title}</h3>
        {cocktail.description && (
          <p className="card-description">{cocktail.description}</p>
        )}
        <div className="card-flavors">
          {cocktail.flavors?.map(f => (
            <span key={f} className="flavor-tag">{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Modifier / Ingredient Card ───────────────────────────────────────────────

function ModifierCard({ modifier }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`modifier-card ${expanded ? 'expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="modifier-header">
        {modifier.catagory && (
          <span className="category-badge">{modifier.catagory}</span>
        )}
        <h3 className="card-title">{modifier.title}</h3>
        {modifier.breif && (
          <p className="modifier-brief">{modifier.breif}</p>
        )}
        <span className="modifier-expand-hint">
          {expanded ? 'collapse ↑' : 'expand ↓'}
        </span>
      </div>

      {expanded && (
        <div className="modifier-detail">
          {modifier.description && (
            <p className="detail-description">{modifier.description}</p>
          )}

          {modifier.ingredients && (
            <div className="detail-section">
              <h4>Ingredients</h4>
              <ul>
                {modifier.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
              </ul>
            </div>
          )}

          {modifier.instructions && (
            <div className="detail-section">
              <h4>Instructions</h4>
              <ol>
                {modifier.instructions.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
            </div>
          )}

          {modifier.notes && (
            <div className="detail-section">
              <h4>Notes</h4>
              <ul>
                {modifier.notes.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Menus Section ────────────────────────────────────────────────────────────

function MenusSection({ onCocktailClick }) {
  const menus = [...new Set(cocktailsData.map(c => c.menu))];
  const [activeMenu, setActiveMenu] = useState(menus[0]);

  const menuCocktails = cocktailsData.filter(c => c.menu === activeMenu);

  return (
    <div className="menus-container">

      <div className="menu-tabs">
        {menus.map(menu => (
          <button
            key={menu}
            className={`menu-tab ${activeMenu === menu ? 'active' : ''}`}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </button>
        ))}
      </div>

      <div className="menu-cocktail-list">
        {menuCocktails.map(cocktail => (
          <div
            key={cocktail.id}
            className="menu-cocktail-item"
            onClick={() => onCocktailClick(cocktail)}
          >
            <div className="menu-cocktail-left">
              <span className="menu-cocktail-title">{cocktail.title}</span>
              {cocktail.description && (
                <span className="menu-cocktail-desc">{cocktail.description}</span>
              )}
            </div>
            <div className="menu-cocktail-right">
              {cocktail.featured && <span className="featured-badge">Featured</span>}
              <div className="menu-cocktail-flavors">
                {cocktail.flavors?.map(f => (
                  <span key={f} className="flavor-tag small">{f}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

// ─── Recipes Page ─────────────────────────────────────────────────────────────

function Recipes() {
  const [activeSection, setActiveSection] = useState('cocktails');
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const sections = ['cocktails', 'ingredients', 'menus'];

  return (
    <div className="recipes-container">

      <div className="recipes-header">
        <h1 className="recipes-title">Recipes</h1>
        <div className="recipes-nav">
          {sections.map(section => (
            <button
              key={section}
              className={`recipes-tab ${activeSection === section ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {activeSection === 'cocktails' && (
        <section className="section-content">
          <div className="cocktails-grid">
            {cocktailsData.map(cocktail => (
              <CocktailCard
                key={cocktail.id}
                cocktail={cocktail}
                onClick={setSelectedCocktail}
              />
            ))}
          </div>
        </section>
      )}

      {activeSection === 'ingredients' && (
        <section className="section-content">
          <div className="modifiers-grid">
            {modifiersData.map(modifier => (
              <ModifierCard key={modifier.id} modifier={modifier} />
            ))}
          </div>
        </section>
      )}

      {activeSection === 'menus' && (
        <section className="section-content">
          <MenusSection onCocktailClick={cocktail => {
            setSelectedCocktail(cocktail);
            setActiveSection('cocktails');
          }} />
        </section>
      )}

      <CocktailDetail
        cocktail={selectedCocktail}
        onClose={() => setSelectedCocktail(null)}
      />

    </div>
  );
}

export default Recipes;
