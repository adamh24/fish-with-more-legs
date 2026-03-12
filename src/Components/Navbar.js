import { useEffect } from 'react'
import '../Style/Navbar.css'

function Navbar() {

  useEffect(() => {
    const nav = document.querySelector('nav')
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        nav.classList.add('hidden')
      } else {
        nav.classList.remove('hidden')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav>
        <div className='tab'>Courses</div>
        <div className='tab'>Recipes</div>
        <div className="title">Fish With Legs</div>
        <div className='tab'>About</div>
        <div className='tab'>Contact</div>
        
    </nav>
  )
}

export default Navbar