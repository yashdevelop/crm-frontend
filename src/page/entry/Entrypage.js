import React,{useState} from 'react'
import "./entry.style.css"
import {LoginForm} from "../../components/Login/Login.comp"
import { Jumbotron } from "react-bootstrap"
import {PasswordReset} from "./../../components/password-reset/PasswordReset.comp"
export const Entrypage = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [frmLoad,setFrmLoad] = useState('login')

const handleOnChange=e=>{
    const {name,value}=e.target;
    
    switch(name){
        case "email":
            setEmail(value);
            break;
        
        case "password":
            setPassword(value);
            break;
        case "default":
          break;
    }
    console.log(name,value);
}
const handleOnSubmit=e=>{
    e.preventDefault();
    if(!email || !password)
    alert("Fill up all the fields")
}

const formSwitcher=(frmtype)=>{
  setFrmLoad(frmtype)
}

    return (
        <div className="bg-info entry-page">
           
       <Jumbotron className="form-box">
           {frmLoad ==="login" &&
        <LoginForm handleOnChange={handleOnChange} formSwitcher={formSwitcher}
         handleOnSubmit={handleOnSubmit} email={email} pass={password}/>}
        {frmLoad==="reset" &&
        <PasswordReset handleOnChange={handleOnChange} formSwitcher={formSwitcher}
         handleOnSubmit={handleOnSubmit} email={email} pass={password}/>}
      </Jumbotron>
     
        </div>
    )
}


