import { useEffect, useMemo, useRef, useState } from 'react';
import flavourData from '../Data/flavours.json';
import '../Style/FlavourEngine.css';
import matrix from '../Components/CompatibilityMatrix.js';

const MIN_CARD_WIDTH = 220;
const GRID_GAP = 20;
const PAGE_SIZE = 21;
const SEARCH_FIELDS = ['title', 'category', 'profile'];
const DROPDOWN_CLOSE_MS = 160;

const normalizeSearchValue = (value) => {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

const getScore = (flavourA, flavourB) => {
  return matrix[flavourA.id][flavourB.id];
};

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


function FlavourWheel({ flavours, selectedFlavours = [], onDeselectFlavour, onSelectFlavour }) {
  const [searchTerm, setSearchTerm] = useState('');
  const flavourOptions = Array.isArray(flavours) ? flavours : flavourData;
  const hasSearchTerm = searchTerm.trim().length > 0;
  const containerRef = useRef(null);
  const searchWrapRef = useRef(null);
  const [dropdownMaxHeight, setDropdownMaxHeight] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [closingResults, setClosingResults] = useState([]);

  const filteredFlavour = useMemo(() => {
    const query = normalizeSearchValue(searchTerm.trim());

    if (!query) {
      return [...flavourOptions].sort((a, b) => a.title.localeCompare(b.title));
    }

    return flavourOptions.filter((flavour) => {
      return SEARCH_FIELDS.some((field) => {
        const value = flavour[field];
        return typeof value === 'string' && normalizeSearchValue(value).includes(query);
      });
    });
  }, [flavourOptions, searchTerm]);

  useEffect(() => {
    if (hasSearchTerm) {
      setClosingResults(filteredFlavour);
    }
  }, [filteredFlavour, hasSearchTerm]);

  const dropdownResults = hasSearchTerm ? filteredFlavour : closingResults;

  useEffect(() => {
    const containerNode = containerRef.current;
    const searchWrapNode = searchWrapRef.current;

    if (!hasSearchTerm || !containerNode || !searchWrapNode) {
      setDropdownMaxHeight(0);
      return undefined;
    }

    const updateDropdownMaxHeight = () => {
      const containerRect = containerNode.getBoundingClientRect();
      const searchWrapRect = searchWrapNode.getBoundingClientRect();
      const availableHeight = containerRect.bottom - searchWrapRect.bottom - 30;

      setDropdownMaxHeight(Math.max(0, Math.floor(availableHeight)));
    };

    updateDropdownMaxHeight();

    const resizeObserver = new ResizeObserver(updateDropdownMaxHeight);
    resizeObserver.observe(containerNode);
    resizeObserver.observe(searchWrapNode);
    window.addEventListener('resize', updateDropdownMaxHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDropdownMaxHeight);
    };
  }, [hasSearchTerm, filteredFlavour.length]);

  useEffect(() => {
    if (hasSearchTerm) {
      setIsDropdownVisible(true);
      return undefined;
    }

    if (!isDropdownVisible) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsDropdownVisible(false);
    }, DROPDOWN_CLOSE_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [hasSearchTerm, isDropdownVisible]);

  return (
    <div className='flavour-wheel-container' ref={containerRef}>

      <div className="flavour-wheel-head">

      <div className="flavour-wheel-search-wrap" ref={searchWrapRef}>
        <input
          type="search"
          className="flavour-engine-search"
          placeholder="Search..."
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
        {searchTerm && (
          <button
            type="button"
            className="flavour-engine-search-clear"
            onClick={() => setSearchTerm('')}
            aria-label="Clear search"
          >
            <span aria-hidden="true">x</span>
          </button>
        )}

        {isDropdownVisible && (
          <div
            className={`flavour-wheel-dropdown${hasSearchTerm ? ' is-open' : ' is-closing'}`}
            role="listbox"
            aria-label="Flavour wheel results"
            style={{ maxHeight: hasSearchTerm ? `${dropdownMaxHeight}px` : '0px' }}
          >
            {dropdownResults.length > 0 ? (
              dropdownResults.map((flavour) => (
                <button
                  key={flavour.id}
                  type="button"
                  className="flavour-wheel-dropdown-item"
                  onClick={() => {
                    onSelectFlavour?.(flavour.id);
                    setSearchTerm('');
                  }}
                >
                  <span className="flavour-wheel-dropdown-title">{flavour.title}</span>
                  <span className="flavour-wheel-dropdown-meta">{flavour.profile}</span>
                </button>
              ))
            ) : (
              <div className="flavour-wheel-dropdown-empty">No matching flavours</div>
            )}
          </div>
        )}
      </div>

      <div className="flavour-wheel-selected-container">
        {selectedFlavours.length > 0 ? (
          selectedFlavours.map((flavour) => (
            <div className="flavour-wheel-selected-item" key={flavour.id}>
              <div className="flavour-wheel-selected-content">
                <span className="flavour-wheel-selected-title">{flavour.title}</span>
                <span className="flavour-wheel-selected-profile">{flavour.profile}</span>
              </div>
              <button
                type="button"
                className="flavour-wheel-selected-remove"
                onClick={() => onDeselectFlavour?.(flavour.id)}
                aria-label={`Deselect ${flavour.title}`}
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
          ))
        ) : (
          <div className="flavour-wheel-selected-empty">No flavours selected</div>
        )}
      </div>

      </div>

    </div>
  );
}


function FlavourEngine() {
  const [searchTerm, setSearchTerm] = useState('');
  const resultsRef = useRef(null);
  const [columnsPerRow, setColumnsPerRow] = useState(1);
  const [selectedFlavourIds, setSelectedFlavourIds] = useState([]);
  const [isCompatibilityFilterActive, setIsCompatibilityFilterActive] = useState(false);

  const filteredFlavour = useMemo(() => {
    const query = normalizeSearchValue(searchTerm.trim());

    if (!query) {
      return [...flavourData].sort((a, b) => a.title.localeCompare(b.title));
    }

    return flavourData.filter((flavour) => {
      return SEARCH_FIELDS.some((field) => {
        const value = flavour[field];
        return typeof value === 'string' && normalizeSearchValue(value).includes(query);
      });
    });
  }, [searchTerm]);

  const [page, setPage] = useState(1);

  const flavourById = useMemo(() => {
    return new Map(flavourData.map((flavour) => [flavour.id, flavour]));
  }, []);

  const selectedFlavours = useMemo(() => {
    return selectedFlavourIds
      .map((id) => flavourById.get(id))
      .filter(Boolean);
  }, [selectedFlavourIds, flavourById]);

  const compatibilityById = useMemo(() => {
    if (selectedFlavourIds.length === 0) {
      return new Map();
    }

    const selectedItems = selectedFlavourIds.map((id) => flavourById.get(id)).filter(Boolean);

    const map = new Map();
    for (const flavour of filteredFlavour) {
      const scores = selectedItems.filter((selected) => selected.id !== flavour.id).map((selected) => getScore(flavour,selected));

      if(scores.length == 0) {
        map.set(flavour.id, null);
        continue;
      }

      const average = Math.round(scores.reduce((sum, value) => sum + value, 0) / scores.length);
      
      map.set(flavour.id, average);
    }
    return map;
  }, [filteredFlavour, selectedFlavourIds, flavourById]); 

  const displayedFlavour = useMemo(() => {
    if (!isCompatibilityFilterActive || selectedFlavourIds.length === 0) {
      return filteredFlavour;
    }

    return [...filteredFlavour]
      .filter((flavour) => compatibilityById.get(flavour.id) !== null)
      .sort((a, b) => {
        const compatibilityDiff = (compatibilityById.get(b.id) ?? 0) - (compatibilityById.get(a.id) ?? 0);

        if (compatibilityDiff !== 0) {
          return compatibilityDiff;
        }

        return a.title.localeCompare(b.title);
      });
  }, [compatibilityById, filteredFlavour, isCompatibilityFilterActive, selectedFlavourIds.length]);

  const paginatedFlavour = useMemo(() => {
    return displayedFlavour.slice(0, page * PAGE_SIZE);
  }, [displayedFlavour, page]);

  useEffect(() => {
    const resultsNode = resultsRef.current;

    if (!resultsNode) {
      return undefined;
    }

    const updateColumnsPerRow = () => {
      const nextColumns = Math.max(
        1,
        Math.floor((resultsNode.clientWidth + GRID_GAP) / (MIN_CARD_WIDTH + GRID_GAP))
      );

      setColumnsPerRow(nextColumns);
    };

    updateColumnsPerRow();

    const resizeObserver = new ResizeObserver(updateColumnsPerRow);
    resizeObserver.observe(resultsNode);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setPage(1);
  }, [searchTerm, isCompatibilityFilterActive, selectedFlavourIds]);

  useEffect(() => {
    if (selectedFlavourIds.length === 0) {
      setIsCompatibilityFilterActive(false);
    }
  }, [selectedFlavourIds.length]);

  const isSingleRow = paginatedFlavour.length > 0 && paginatedFlavour.length <= columnsPerRow;

  const toggleSelectFlavour = (flavourId) => {
    setSelectedFlavourIds((prev) => {
      if (prev.includes(flavourId)) {
        return prev.filter((id) => id !== flavourId);
      }

      return [...prev, flavourId];
    });
  };


  return (
    <div className="flavour-engine-container">

      <div className='flavour-engine-title-block'>
        <h1 className="flavour-engine-title">Flavour Engine</h1>
      </div>

      <FlavourWheel
        flavours={filteredFlavour}
        selectedFlavours={selectedFlavours}
        onDeselectFlavour={toggleSelectFlavour}
        onSelectFlavour={toggleSelectFlavour}
      />

      <hr className="divider" />

      <div className="flavour-engine-search-wrap-2">
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
        {searchTerm && (
          <button
            type="button"
            className="flavour-engine-search-clear"
            onClick={() => setSearchTerm('')}
            aria-label="Clear search"
          >
            <span aria-hidden="true">x</span>
          </button>
        )}
      </div>

      <div className="flavour-engine-filter-row">
        
        <div>
        <button
          type="button"
          className={`flavour-engine-compatibility-filter${isCompatibilityFilterActive ? ' is-active' : ''}`}
          onClick={() => setIsCompatibilityFilterActive((prev) => !prev)}
          disabled={selectedFlavourIds.length === 0}
          aria-pressed={isCompatibilityFilterActive}
        >
          Sort by Compatibility
        </button>
        </div>

        <div>
        <p className="flavour-engine-count">
          Showing {displayedFlavour.length} ingredient{displayedFlavour.length === 1 ? '' : 's'}
        </p>
        </div>

      </div>

      <div
        ref={resultsRef}
        className={`flavour-engine-results${isSingleRow ? ' flavour-engine-results--single-row' : ''}`}
      >
        {paginatedFlavour.map((flavour) => {
          const isSelected = selectedFlavourIds.includes(flavour.id);
          const compatibilityValue = compatibilityById.get(flavour.id);

          return (
          <article className="flavour-engine-item" key={flavour.id}>
              <button
                type="button"
                className={`flavour-engine-item-select${isSelected ? ' is-selected' : ''}`}
                onClick={() => toggleSelectFlavour(flavour.id)}
                aria-pressed={isSelected}
                aria-label={`${isSelected ? 'Deselect' : 'Select'} ${flavour.title}`}
              >
                <span aria-hidden="true">+</span>
              </button>
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
                      style={{ width: `${compatibilityValue ?? 0}%` }}
                    />
                  </div>
                  <span className="flavour-engine-item-compatibility-value">{compatibilityValue ?? ''}%</span>
                </div>
                <div className="flavour-engine-item-profile">                 
                    <span className="flavour-engine-profile-tag" style={getProfileStyle(flavour.profile)}>{flavour.profile}</span>
                </div>
             </div>
          </article>
        );
        })}
      </div>

      {paginatedFlavour.length < displayedFlavour.length && (
        <button className="load-more" onClick={() => setPage(p => p + 1)}>Load more</button>
      )}

    </div>
  );
}

export default FlavourEngine;
