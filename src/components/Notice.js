import React from 'react'
import { FaStar } from 'react-icons/fa';

const Notice = ({ date, notice_title, notice_item, title }) => {
  return (
    <article className="notice">
      <div className="notice-info">

        <span className="notice-date">{date}</span><br />
        <h3 className="notice-title">{notice_title}</h3>

        <div className="notice-container">
          <div className="notice-stack">
            {
              notice_item.map(item => {
                return <p key={item.id}><FaStar className="notice-icon"></FaStar>{item.name}</p>
              })
            }
          </div>
        </div>
      </div>


    </article>
  )
}

export default Notice
