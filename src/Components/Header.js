import css from './Header.css'
import { NavLink } from 'react-router-dom'
import hamburgerImg from '../images/Home/hamburger.jpg'





const dlogo = "<lmgtr/>"

const Header = () => {
  return (
    <div>
      <header className='headerStyle'>

      
       <ul className='headerMenu'>


       <div className='logo'>{dlogo}</div>
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




     

        <div className='hamburger'><img src={hamburgerImg} className='hamburgerImg'/> </div>

      

 
  

      </header>







    </div>
  )
}

export default Header
