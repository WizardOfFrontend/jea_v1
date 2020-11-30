import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from "gatsby"
import Sidebar from '../components/Sidebar';
import { navigate } from 'gatsby'

const Links = ({ styleClass, active, children }) => {
  const { user, setUser } = useContext(UserContext);
  const { isOpen, setIsOpen } = useState(false);
  let loggedInMenus = false

  if (user && user.user.is_active) {
    loggedInMenus = true;
  }

  return (
    <ul className={styleClass}>
      <li>
        {(user && user.user.is_active) &&
          <a href={user.user.storage_url} target="_blank" rel="noreferrer" className="page-link" active={active}>
            My Storage
          </a>
        }
      </li>
      <li>
        <Link to="/" className="page-link" active={active}>
          Home
        </Link>
      </li>
      <li>
        <Link style={{ "color": "red" }} to="/notice" className="page-link" active={active}>
          Notice
        </Link>
      </li>
      <li>
        <Link to="/#abouts" className="page-link" active={active} >
          About
        </Link>
      </li>
      <li>
        {
          (loggedInMenus !== true) ? (<></>) : (
            <Link to="/lecture" className="page-link" active={active}>
              Lectures
            </Link>
          )
        }
      </li>
      <li>
        <a style={{ color: "#29DB3C" }} href="https://www.classcard.net/Login?redirect=/Main" rel="noreferrer" target="_blank" className="page-link" active={active}>
          ClassCard
        </a>
      </li>
      <li>
        {
          (user && user.user.is_active) ? // user가 존재하고 activate 된 경우  
            // show Log Out button. Otherwise, show Log In button       
            <Link
              to="/"
              className="page-link"
              onClick={() => {
                if (localStorage.getItem("user")) {
                  localStorage.removeItem("user");
                }
                setUser(null);
              }}>Log Out</Link> :
            <Link to="/login" className="page-link">Log In</Link>
        }
      </li>
    </ul>
  )
}

export default Links
