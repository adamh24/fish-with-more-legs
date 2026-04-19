import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavDropdown from './NavDropdown'
import '../Style/Navbar.css'
import logo from '../Assets/logo-green-left.png'
import { useNavigate } from 'react-router-dom'

function Navbar ({ onOpenContact }) {
  const navigate = useNavigate();

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
      
        <NavDropdown onOpenContact={onOpenContact} />
        <Link className='tab' to='/courses'>Courses</Link>
        <Link className='tab' to='/recipes'>Recipes</Link>
        <Link className="title" to='/'>Fish With Legs</Link>
        <Link className='tab' to='/about'>About</Link>
        <div className='tab' onClick={onOpenContact}>Contact</div>
        <Link to='/admin-gate' style={{ cursor: 'default' }}>
          <img className='nav-logo' src={logo} alt='Logo' />
        </Link>
    </nav>
  )
}

export default Navbar