import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/layout";


// export for Gatsby to use, run, and give access to when setting up 'context' for createPage function. Query response provided to props (props.data) of Blog component.
// markdown part is targeting / frontmatter is what we want about our target
export const query = graphql`
query ($slug: String) { 
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date
      }
      html
    }
  }`

const Blog = (props)=>{
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={ {__html: props.data.markdownRemark.html} }></div>
        </Layout>
    )
}


export default Blog;