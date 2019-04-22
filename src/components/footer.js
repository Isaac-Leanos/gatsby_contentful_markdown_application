import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby";
import footerStyles from "./footer.module.scss";

const Footer = ()=>{
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
      `)
    return (
        <footer className={footerStyles.footer}>
            <p>{data.site.siteMetadata.author}, &#169; 2 0 1 9</p>
        </footer>
    )
}


export default Footer;