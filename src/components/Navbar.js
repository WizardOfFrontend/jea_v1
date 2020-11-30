import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.png'
import Links from '../constants/links'

const activeStyle = {
    boxShadow: "0px 2px goldenrod"
}
const Navbar = ({ toggleSidebar }) => {
  return (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Jays English Academy logo" /> 
          <h3><span>J</span>ay's <br/><span>E</span>nglish<br/> <span>A</span>cademy</h3>
        </Link>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <Links styleClass="nav-links" active={activeStyle}/>
      {/* <SocialLinks styleClass="nav-icons" /> */}
    </div>
  </nav>
  )
}

export default Navbar

