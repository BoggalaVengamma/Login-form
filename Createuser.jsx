import React from "react"
import { useState } from "react"
import style from "./homecrud.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Createuser=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let abc=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }

    let usedata=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
       axios.post("http://localhost:3000/employees",payload)
       .then(()=>{
        console.log("data has been stored");
       }).catch(()=>{
        console.log("something went wrong");
       })
       abc("/users")
    }

    return(
        <div id={style.myForm}>
            <form>
                <label >Name</label>
                <input type="text" value={name} onChange={nameData} /><br />
                <label>salary</label>
                <input type="text" value={salary} onChange={salaryData}/><br />
                <label >company</label>
                <input type="text" value={company} onChange={companyData} /><br />
                <button onClick={usedata}>Submit</button>
            </form>
            
        
        </div>
    )
}
export default Createuser