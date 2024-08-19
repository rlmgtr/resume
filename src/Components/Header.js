import css from './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className='headerStyle'>


<ul className='headerMenu'>
<h3 className='logo'>LM</h3>
    <li className='menuItem'><Link to='/'>Home</Link></li>
    <li className='menuItem'><Link to='about'>About</Link></li>
    <li className='menuItem'><Link to='contact'>Contact</Link></li>
    <li className='menuItem'><Link to='portfolio'>Portfolio</Link></li>
</ul>
        </header>
      
    </div>
  )
}

export default Header
