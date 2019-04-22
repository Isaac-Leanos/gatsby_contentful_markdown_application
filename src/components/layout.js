import React from "react"
import Footer from "../components/footer";
import Header from "../components/header";
import layoutStyles from "./layout.module.scss"; // scss modules object


const Layout = (props)=>{
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header></Header>
                {props.children}
            </div>
            
            <Footer></Footer>
        </div>
    )
}


export default Layout;