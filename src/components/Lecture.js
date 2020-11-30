import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"


const Lecture = ({ id, title, image, teacher, date, slug, desc }) => {
  return (
    <Link to={`/lectures/${slug}`} className="lecture" key={id}>
      <article>
        {image &&
          <Image fluid={image.childImageSharp.fluid} className="lecture-img" />
        }
        <div className="lecture-card">
          <h4>{title}</h4>
          <p><ReactMarkdown source={desc} /></p>          
          <div className="lecture-footer">
            <p>By <span style={{ color: "#551a8b" }}>{teacher}</span></p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link >
  )
}

Lecture.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
}

export default Lecture;      