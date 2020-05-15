import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";
import "../styles/index.scss";


const IndexPage = ()=>{
    return (
            <Layout>
                <h1>Index</h1>
                <p><Link to="/about">About me</Link> </p>
                <p><a href="https://github.com" target="_blank">Github</a> </p>
            </Layout>

    )
}


export default IndexPage;