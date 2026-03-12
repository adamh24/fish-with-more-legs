import Hero from '../Components/Hero';
import FeatureCards from '../Components/FeatureCards';
import '../Style/Home.css';


function Home() {
  const classicCocktails = [
    'Negroni',
    'Old Fashioned',
    'Daiquiri',
    'Martini',
    'Manhattan',
    'Margarita',
    'Whiskey Sour',
    'Mojito',
    'Sidecar',
    'Boulevardier',
    'Tom Collins',
    'Cosmopolitan'
  ];

  return (
    <div className="home-container">
        
        <Hero />

        <div className="cocktail-banner" aria-hidden="true">
          <div className="cocktail-banner-track">
            {[...classicCocktails, ...classicCocktails].map((name, index) => (
              <span className="cocktail-banner-item" key={`${name}-${index}`}>
                {name}
              </span>
            ))}
          </div>
        </div>

        <FeatureCards />

    </div>
  )
}

export default Home