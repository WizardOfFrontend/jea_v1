import React from 'react'
import Title from "./Title"
import { Link } from "gatsby"
import Notice from './Notice'

const Notices = ({ notices, title, showLink }) => {
  return <section className="section notices">
    <Title style={{"color":"red"}} title={title} />
    <div className="section-center projects-center">
      {
        notices.map(notice => {
          return <Notice key={notice.strapiId} {...notice} />
        })
      }
    </div>
    {
      showLink && <Link to='/notice' className="notice-btn center-btn">Notice</Link>
    }
  </section>
}

export default Notices