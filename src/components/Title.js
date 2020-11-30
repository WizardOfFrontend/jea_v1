import React from "react"

const Title = ({ title }) => {
  return <div className="section-title" style={{ marginTop: "5rem" }}>
    <h2>{title || "default title"}</h2>
    <div className="underline"></div>
  </div>
}

export default Title
