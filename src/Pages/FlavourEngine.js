import { useMemo, useState } from 'react';
import flavourData from '../data/flavours.json';
import '../Style/FlavourEngine.css';


const getFlavourImage = (filename) => {
  if (!filename) return '../Assets/modifier.png';
    return `/images/flavours/${filename}`;
};

const profileColours = {
  'Sweet':      { color: 'rgb(245, 172, 114)', border: 'rgba(245, 172, 114, 0.4)' },
  'Sour':       { color: 'rgb(120, 165, 130)', border: 'rgba(120, 165, 130, 0.4)' },
  'Salty':      { color: 'rgb(100, 182, 255)', border: 'rgba(100, 182, 255, 0.4)' },
  'Bitter':     { color: 'rgb(255, 107, 157)', border: 'rgba(255, 107, 157, 0.4)' },
  'Umami':      { color: 'rgb(216, 150, 255)', border: 'rgba(216, 150, 255, 0.4)' },

  
};

const getProfileStyle = (profile) => {
  const colours = profileColours[profile];
  if (!colours) return {};
  return {
    color: colours.color,
    borderColor: colours.border,
  };
};


function FlavourWheel({ flavours }) {
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
      return [...flavourData].sort((a, b) => a.title.localeCompare(b.title));
    }

    return flavourData.filter((flavour) => {
      const titleMatch = flavour.title.toLowerCase().includes(query);
      const categoryMatch = flavour.category.toLowerCase().includes(query);
      const profileMatch = flavour.profile.toLowerCase().includes(query);


      return titleMatch || categoryMatch || profileMatch ;
    });
  }, [searchTerm]);

  
  const PAGE_SIZE = 21;
  const [page, setPage] = useState(1);

  const paginatedFlavour = useMemo(() => {
    return filteredFlavour.slice(0, page * PAGE_SIZE);
  }, [filteredFlavour, page]);


  return (
    <div className="flavour-engine-container">

      <div className='flavour-engine-title-block'>
        <h1 className="flavour-engine-title">Flavour Engine</h1>
      </div>

      <FlavourWheel flavours={filteredFlavour} />

      <hr className="divider" />

      <div className="flavour-engine-search-wrap">
        <input
          type="search"
          className="flavour-engine-search"
          placeholder="Search by ingredient, category or flavour..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
            setSearchTerm('');
            e.target.blur();
            }
          }}
          aria-label="Search flavour"
        />
      </div>

      <p className="flavour-engine-count">
        Showing {filteredFlavour.length} ingredient{filteredFlavour.length === 1 ? '' : 's'}
      </p>

      <div className="flavour-engine-results">
        {paginatedFlavour.map((flavour) => (
          <article className="flavour-engine-item" key={flavour.id}>
              <img className="flavour-engine-item-image" 
                src={getFlavourImage(flavour.image)} 
                alt={flavour.title} 
                loading='lazy'
                decoding="async"
                onError={(e) => {
                  e.target.src = '/images/flavours/modifier.png';
                  e.target.onerror = null;
                }}
              />
              <div className="flavour-engine-item-title-block">
                <span className="flavour-engine-item-title">{flavour.title}</span>
                <div className="flavour-engine-item-divider" />
                <div className="flavour-engine-item-compatibility">
                  <span className="flavour-engine-item-compatibility-label">Compatibility</span>
                  <div className="flavour-engine-item-compatibility-bar">
                    <span
                      className="flavour-engine-item-compatibility-fill"
                    />
                  </div>
                  <span className="flavour-engine-item-compatibility-value">%</span>
                </div>
                <div className="flavour-engine-item-profile">                 
                    <span className="flavour-engine-profile-tag" style={getProfileStyle(flavour.profile)}>{flavour.profile}</span>
                </div>
             </div>
          </article>
        ))}
      </div>

      {paginatedFlavour.length < filteredFlavour.length && (
        <button className="load-more" onClick={() => setPage(p => p + 1)}>Load more</button>
      )}

    </div>
  );
}

export default FlavourEngine;
