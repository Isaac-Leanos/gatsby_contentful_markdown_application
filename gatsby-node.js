// internal node API file.


const path = require("path");



//exporting registers with Gatsby
module.exports.onCreateNode = ({node, actions})=>{
    const { createNode, createNodeField } = actions;
    // Transform the new node here and create a new node or
    // create a new node field.

    if(node.internal.type === "MarkdownRemark") {
        // console.log(JSON.stringify(node, undefined, 4) );   
        const slug = path.basename(node.fileAbsolutePath, ".md"); // omit .md extension
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve(`./src/templates/blog.js`); //absolute path
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for ex. products, portfolio items, landing pages, etc.
    const response = await graphql(`
    query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug 
              }
            }
          }
        }
      }
    `)

    response.data.allMarkdownRemark.edges.forEach(edge=>{
        createPage({
            component: blogTemplate, // component-template
            path: `/blog/${edge.node.fields.slug}`, // path for the new page.
            // Add optional context data to be inserted as props into the page component..
            // The context data can also be used as arguments to the page GraphQL query.
            // The page "path" is always available as a GraphQL argument.
            context: {
                slug: edge.node.fields.slug
            }
        })
    })





  }