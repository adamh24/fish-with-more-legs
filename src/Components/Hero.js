import '../Style/Hero.css';

function Hero() {
  return (
    <div className="hero-container">
        
        <div className="hero-textbox">
            <span className="feature-pre-title">Welcome to</span>
            <span className="feature-title">Fish With Legs</span>
            <span className="feature-intro">Step behind the bar and into a world where creativity, knowledge, and sustainability pour together in perfect balance. </span>
            {/* <span>Whether you’re looking for inspiring cocktail recipes, expert bar techniques, or full training programs to elevate your skills, you’ll find everything you need to shake, stir, and serve with confidence. Great hospitality goes beyond the glass — it’s about craftsmanship, connection, and conscious practice. Explore a community built for bartenders, enthusiasts, and curious minds who care about flavour and the future.</span> */}
        </div>

        <div className="hero-image">
            <img src='' alt="Hero Image" />
        </div>

    </div>
  )
}

export default Hero