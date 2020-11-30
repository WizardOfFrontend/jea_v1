import React from "react"
import Title from "./Title"
import Lecture from "./Lecture"
import { Link } from "gatsby"

export const Lectures = ({lectures,title,showLink}) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center lectures-center">
        {
          lectures.map(lecture=>{
            return <Lecture key={lecture.id} {...lecture} />
          })
        }
      </div>
      {
        showLink && (
          <Link to="/lecture" className="lectures-btn center-btn">lecture</Link>
        )
      }
    </section>
  )
}
export default Lectures

