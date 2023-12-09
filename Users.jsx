import axios from "axios"
import { useEffect, useState } from "react"
import style from "./homecrud.module.css"
import {Link} from "react-router-dom"

const Users=()=>{
    let [content,setContent]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/employees")
        .then((resp)=>{
            console.log("get the data");
            setContent(resp.data)
        })
        .catch(()=>{
            console.log("semething went wrong");
        })
    },[])

    let deleteData=(a)=>{
        axios.delete(`http://localhost:3000/employees/${a}`)
        window.location.assign("/users")
    }
    return(
        <div id={style.homepage}>
            {content.map((x)=>{
                return(
                    <div id={style.cards}>
                        <table>
                            <tr>
                                <th colSpan="2">Employee{x.id}</th>
                                
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td>{x.name}</td>
                            </tr>
                            <tr>
                                <td>Salary:</td>
                                <td>{x.salary}</td>
                            </tr>
                            <tr>
                                <td>Company:</td>
                                <td>{x.company}</td>
                            </tr>
                            <tr>
                                <td><Link to={`/edit/${x.id}`}>Edit</Link></td>
                                {/* <td><input type="checkbox" /></td> */}
                                <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
                            </tr>
                        </table>
                        
                    </div>
                )
            })}

            
        </div>
    )
}
export default Users