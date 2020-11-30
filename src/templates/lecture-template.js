import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import { Video } from "../components/Video"

const ComponentName = ({ data }) => {
  const { content, video_url, title, teacher } = data.lecture;

  return (
    <Layout>
      <section className="lecture-template">        
        {
          <div className="lecture-title">
            <h2>{title}</h2>
            <div className="underline"></div>
            <h4>By {teacher}</h4>
          </div>
        }
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
          className="section-center">
          <article className="lecture-content">
            <ReactMarkdown source={content} />
          </article>
          <Video src={video_url} />
          <Link to="/lecture" className="lectures-btn center-btn">
            to lectures
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleLecture($slug: String) {
    lecture: strapiLectures(slug: { eq: $slug }) {
      title,
      teacher
      content,
      video_url
    }
  }
`

export default ComponentName
