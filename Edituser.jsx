import axios from "axios"
import style from "./homecrud.module.css"
import { useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"
const Edituser=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let navigate=useNavigate()

    let {abc}=useParams()
    console.log(abc);

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }

    let formhandle=()=>{
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/employees/${abc}`,payload)
        .then(()=>{
            console.log("data has been updated");
        })
        .catch(()=>{
            console.log("semething went wrong");
        })
        navigate("/users")
    }

    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${abc}`)
        .then((resp)=>{
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
        .catch(()=>{
            console.log("something went wrong");
        })
    },[])
    return(
        <div id={style.myForm}>
            
            <form>
                <h1>EDIT USER</h1>
                <label >Name</label>
                <input type="text" value={name} onChange={nameData} /><br />
                <label>salary</label>
                <input type="text" value={salary} onChange={salaryData}/><br />
                <label >company</label>
                <input type="text" value={company} onChange={companyData} /><br />
                <button onClick={formhandle}>Update</button>
            </form>
            
        
        </div>
    )
}
export default Edituser