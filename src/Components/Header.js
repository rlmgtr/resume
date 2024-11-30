import css from './Header.css'
import { NavLink } from 'react-router-dom'
import hamburgerImg from '../images/Home/hamburger.jpg'
import { useState } from 'react'

const Header = () => {
  // Move useState inside the component
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  }

  const dlogo = "<rlcm/>"

  return (
    <div>
      <header className='headerStyle'>

        

        <ul className={`headerMenu ${isOpen ? "is-Open" : ""}`}>

        <li><div className='logo'>{dlogo}</div></li>
          
          <nav className='navList'>
                         <li className='menuItem'>
              <NavLink to='/' activeClassName='current'>Home</NavLink>
            </li>
            <li className='menuItem'>
              <NavLink to='/about' activeClassName='current'>About</NavLink>
            </li>
            <li className='menuItem'>
              <NavLink to='/portfolio' activeClassName='current'>Portfolio</NavLink>
            </li>
            <li className='menuItem'>
              <NavLink to='/contact' activeClassName='current'>Contact</NavLink>
            </li>
          </nav>
        </ul>

        <div className='hamburger' onClick={toggleMenu}>
          <img src={hamburgerImg} className='hamburgerImg' />
        </div>

      </header>
    </div>
  )
}

export default Header;
