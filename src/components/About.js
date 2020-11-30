import React, { useState, useContext } from "react"
import Title from "./Title"
import { AiFillMinusCircle } from "react-icons/ai"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import { UserContext } from "../context/UserContext"

const query = graphql`
  {
    allStrapiAbouts(sort: {fields: strapiId, order: DESC}) {
      nodes {
        id
        strapiId
        menu
        date
        subTitle
        desc {
          id
          name
          eachItem
          file_name
        }
      }
    }
  }
`
const About = () => {
  const { user } = useContext(UserContext);
  const data = useStaticQuery(query);
  const { allStrapiAbouts: { nodes: abouts } } = data;
  const [value, setValue] = useState(0);
  const [showDownloadLink, setShowDownloadLink] = useState(true);
  const { subTitle, date, desc } = abouts[value];
  return <section id="abouts" className="section abouts">     
    <Title title="About 제이스 어학원" />    
    <div className="abouts-center">
      <div className="btn-container">
        {abouts.map((item, index) => {
          return (
            <button
              onClick={() => { // 적중률은 only user가 login한 상태에서만
                item.strapiId === 2 && !user ? setShowDownloadLink(false) : setShowDownloadLink(true);
                setValue(index)
              }}
              key={item.strapiId}
              className={`about-btn ${index === value && `active-btn`}`}>
              {item.menu}
            </button>
          )
        })}
      </div>
      {/* about info */}
      <article className="about-info">
        <h3>{subTitle}</h3>
        <p style={{ fontWeight: "bold", fontSize: "20px", marginTop: "1rem" }} className="about-date">{date}</p>
        {
          desc.map(item => {
            return <div key={item.id} className="about-desc">
              <AiFillMinusCircle className="about-icon"></AiFillMinusCircle>

              <div className="scool-type">
                <h4>{item.name}</h4>
                {
                  showDownloadLink && item.file_name &&
                  <a href={item.file_name}
                    target="_blank"
                    rel="noreferrer"
                    download>Download
                  </a>
                }
                <p className="about-eachItem"><ReactMarkdown source={item.eachItem} /></p>
              </div>
            </div>
          })
        }
      </article>
    </div>
  </section>
}

export default About
