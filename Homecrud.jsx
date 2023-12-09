import React from "react"
import { Link } from "react-router-dom"
import style from "./homecrud.module.css"
const Homecrud=()=>{
    return(
        <section id={style.nav}>
            <Link to="/">Create-user</Link>
            <Link to="/users">users</Link>
        </section>
    )
}
export default Homecrud