import { useMemo } from 'react'
import Hero from '../Components/Hero';
import FeatureCards from '../Components/FeatureCards';
import '../Style/Home.css';

function shuffleArray(items) {
  const shuffled = [...items]

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

function Home() {
  const classicCocktails = [
    "Americano",
    "Aperol Spritz",
    "Aviation",
    "Bee's Knees",
    "Boulevardier",
    "Clover Club",
    "Corpse Reviver",
    "Corpse Reviver #2",
    "Cospmopolitan",
    "Daiquiri",
    "Dark 'n' Stormy",
    "French 75",
    "Gimlet",
    "Gimlet",
    "Gin Fizz",
    "Godfather",
    "Grasshopper",
    "Hanky Panky",
    "Hemingway Daiquiri",
    "Jungle Bird",
    "Last Word",
    "Mai Tai",
    "Manhattan",
    "Margarita",
    "Martini",
    "Mint Julep",
    "Mojito",
    "Moscow Mule",
    "Negroni",
    "New York Sour",
    "Old Fashioned",
    "Paloma",
    "Paper Plane",
    "Penicillin",
    "Pisco Sour",
    "Ramos Gin Fizz",
    "Rob Roy",
    "Rusty Nail",
    "Sazerac",
    "Sidecar",
    "Singapore Sling",
    "Stinger",
    "Tom Collins",
    "Trinidad Sour",
    "Tuxedo",
    "Vesper Martini",
    "Whiskey Sour",
    "White Lady"    
  ];

  const shuffledCocktails = useMemo(() => shuffleArray(classicCocktails), [])

  return (
    <div className="home-container">
        
        <Hero />

        <div className="cocktail-banner" aria-hidden="true">
          <div className="cocktail-banner-track">
            {[...shuffledCocktails, ...shuffledCocktails].map((name, index) => (
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