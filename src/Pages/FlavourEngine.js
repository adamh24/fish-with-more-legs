import { useMemo, useState } from 'react';
import flavourData from '../data/flavours.json';
import '../Style/FlavourEngine.css';

const imageContext = require.context('../Assets/Flavours', false, /\.(png|jpe?g|svg)$/);

const flavourImg = (() => {
  try {
    return imageContext('./modifier.png');
  } catch {
    return null;
  }
})();

const getFlavourImage = (filename) => {
  if (!filename) return flavourImg;
  try {
    return imageContext(`./${filename}`);
  } catch {
    return flavourImg;
  }
};

function FlavourWheel() {
  return (
    <div className='flavour-wheel-container'>
      
    </div>
  );
}




function FlavourEngine() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFlavour = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return flavourData;
    }

    return flavourData.filter((flavour) => {
      const titleMatch = flavour.title.toLowerCase().includes(query);
      const categoryMatch = flavour.category.toLowerCase().includes(query);
      const profileMatch = flavour.profile.toLowerCase().includes(query);

      return titleMatch || categoryMatch || profileMatch;
    });
  }, [searchTerm]);

  return (
    <div className="flavour-engine-container">

      <div className='flavour-engine-title-block'>
        <h1 className="flavour-engine-title">Flavour Engine</h1>
      </div>

      <FlavourWheel />

      <div className="flavour-engine-search-wrap">
        <input
          type="search"
          className="flavour-engine-search"
          placeholder="Search by flavour, category, or profile"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          aria-label="Search flavour"
        />
      </div>

      <p className="flavour-engine-count">
        Showing {filteredFlavour.length} flavour{filteredFlavour.length === 1 ? '' : 's'}
      </p>

      <div className="flavour-engine-results">
        {filteredFlavour.map((flavour) => (
          <article className="flavour-engine-item" key={flavour.id}>
             <img className="flavour-engine-item-image" src={getFlavourImage(flavour.image)} alt={flavour.title} />
             <div className="flavour-engine-item-title-block">
                <span className="flavour-engine-item-title">{flavour.title}</span>
                <div className="flavour-engine-item-divider" />
                <div className="flavour-engine-item-compatibility">
                  <span className="flavour-engine-item-compatibility-label">Compatibility</span>
                  <div className="flavour-engine-item-compatibility-bar">
                    <span
                      className="flavour-engine-item-compatibility-fill"
                    //   style={{ width: `%` }}
                    />
                  </div>
                  <span className="flavour-engine-item-compatibility-value">%</span>
                </div>
                <div className="flavour-engine-item-profiles">
                  {flavour.profile.map((profile) => (
                    <span className="flavour-engine-profile-tag" key={profile}>{profile}</span>
                  ))}
                </div>
             </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default FlavourEngine;
