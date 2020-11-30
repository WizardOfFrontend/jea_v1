import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Notices from '../components/Notices'

const Notice = (
  {data: { allStrapiNotices: { nodes: notices } }}
  ) => {

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <Layout>
      <section className="projects-page">
        <Notices notices={notices} title="notice" />
      </section>
    </Layout>
  )
}

export default Notice

export const query = graphql`
{
  allStrapiNotices(sort: {fields: date, order: DESC}) {
    nodes {
      date(formatString: "MMMM Do, YYYY")
      notice_title
      strapiId
      notice_item {
        id
        name
      }      
    }
  }  
}
`

