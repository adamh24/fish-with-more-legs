import { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
        <Link className='tab' to='/courses'>Courses</Link>
        <Link className='tab' to='/recipes'>Recipes</Link>
        <Link className="title" to='/'>Fish With Legs</Link>
        <div className='tab'>About</div>
        <div className='tab'>Contact</div>
        
    </nav>
  )
}

export default Navbar