import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({theme, setTheme}) => {

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
      }
  };

  return (
    <nav>
      <div>
        <p className='title'>L'agence</p>
      </div>
      <div className='menu'>
        <Link to="/" className={`${theme}`}>Accueil</Link>
        <Link to="/about" className={`${theme}`}>L'agence</Link>
        <Link to="/works" className={`${theme}`}>Projets</Link>
      </div>
      <div>
        <p onClick={toggleTheme} className='btn'>Mode</p>
      </div>
    </nav>
  )
}

export default Navbar