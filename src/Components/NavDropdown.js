import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Style/NavDropdown.css'
import menuBars from '../Assets/menu-bars.png'

function NavDropdown ({ onOpenContact }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return (
    <div className='dropdown' ref={dropdownRef}>
      <button type='button' className='dropdown-toggle'
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        aria-haspopup='menu' aria-expanded={isDropdownOpen}>
            <img src={menuBars} alt='' className='dropdown-icon' />
    </button>

      <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
       
        <Link
          className='dropdown-item'
          to='/techniques'
          onClick={() => setIsDropdownOpen(false)}
        >
          Techniques
        </Link>

        <Link
          className='dropdown-item dropdown-action'
          to='/flavour-engine'
        >
          Flavour Engine
        </Link>
      </div>
    </div>
  )
}

export default NavDropdown
