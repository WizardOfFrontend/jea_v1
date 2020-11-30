import React from 'react'
import { Link } from 'gatsby'

const Welcome = () => {
  return (
    <article className="welcome">
      <div className="welcome-info">
        <h3 className="title">Jay's <br/>English Academy<br/>
        Online Course</h3>
        <h4>Account가 activate 될 때까지 기다려주세요.</h4>
        <h4>하루 이상 걸릴 시 학원으로 연락 주시기 바랍니다.</h4>
        <h4 className="phone">Phone: 031-555-0533</h4>
        <Link className="btn" to="/">Back To Home</Link>
      </div>
    </article>
  )
}

export default Welcome


