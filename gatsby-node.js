const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {     
      lectures: allStrapiLectures {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.lectures.nodes.forEach(lecture => {
    createPage({
      path: `/${lecture.slug}`,
      component: path.resolve(`src/templates/lecture-template.js`),
      context: {
        slug: lecture.slug,
      },
    })
  })
}

