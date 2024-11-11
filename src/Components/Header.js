import css from './Header.css'
import { NavLink } from 'react-router-dom'

const dlogo = "<lmgtr/>"

const Header = () => {
  return (
    <div>
      <header className='headerStyle'>
        <ul className='headerMenu'>
          <h3 className='logo'>{dlogo}</h3>
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
      </header>
    </div>
  )
}

export default Header
