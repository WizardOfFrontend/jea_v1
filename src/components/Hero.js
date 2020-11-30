import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const Hero = () => {
  const { user, setUser } = useContext(UserContext);
  const { file: { childImageSharp: { fluid } } } = useStaticQuery(query);

  // if there is no user or a user is not active, set the user to null
  if(!user || !user.user.is_active){
    setUser(null)
  }
  
  return <header className="hero">
    <div className=" hero-center">
      <article className="hero-info">
        <div>
          <h2>제이스 어학원입니다.</h2>
          <h4>The best english academy Ever!</h4>
          <h4 className="phone">Phone: 031-555-0533  </h4>
        </div>
        {
          (user && user.user.is_active) ? // user가 존재하고 activate 된 경우  
          // show Log Out button. Otherwise, show Log In button       
          <Link 
          className="btn" 
          to="/" 
          onClick={() => {
            if(localStorage.getItem("user")){
              localStorage.removeItem("user");
            }
            setUser(null);
          }}>Log Out</Link>:
          <Link className="btn" to="/login">Log In</Link>            
        }
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>
  </header>
}

export default Hero
const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
         ...GatsbyImageSharpFluid
      }
    }
  }
}
`