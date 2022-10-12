import React from 'react';
import "../../App.css"
import Logo from '../../../src/images/image.png'
import { Link } from 'react-router-dom';

const Header = () => {

	return (
    <nav className="navbar navbar-dark bg-black">
      <div className='container-fluid'>
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="TMDB" width="40" height="35" className='mx-5'/>
          </Link>
      </div>
    </nav>
  )
  } 
export default Header;