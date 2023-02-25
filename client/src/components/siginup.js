import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export default function Siginup() {

    const navigate=useNavigate();


    const [user,setuser]=useState({email:"",password:""})

    const [confpass,setconfpass]=useState({email:"",password:""})
    const [toggle,settoggle]=useState(true)





    async function signup(userdata){
    
            const res=await axios.post("https://recipe-app-290d.onrender.com/user/signup",userdata)

      

            if(!res.data.message){

                alert("registration sucessfull")
                navigate("/")

            }else{
                alert("user already exist")
            }




    }

    function submit(){
        const emailreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(user){
            if(!user.email.match(emailreg)){
                alert("not a valid email")
            }
            if(user.password!==confpass.password){
                alert("password is not matching")
            }
            else{
                signup(user)
            }
        }
        

    }







  return (
    <div className='login-container'>
    <h1>REGISTER</h1>

    <input type="email" placeholder='email' style={{width:"350px",height:"30px",fontSize:"22px",marginBottom:"20px"}} onChange={(e)=>{setuser({...user,email:e.target.value})}} ></input><br/>
      <input type="password" placeholder='password' style={{width:"350px",height:"30px",fontSize:"22px",marginBottom:"20px"}}  onChange={(e)=>{setuser({...user,password:e.target.value})}}></input><br/>
    <input type="text" placeholder='confirm password' style={{width:"350px",height:"30px",fontSize:"22px",marginBottom:"20px"}} onChange={(e)=>{setconfpass({...confpass,password:e.target.value})}}></input><br/>
   

    <input style={{display:"inline"}} type="checkbox" onChange={()=>{settoggle(!toggle)}}></input><p style={{color:"white",display:"inline"}}>"I AGREE WITH TERMS AND CONDITIONS"</p>
   
    <button style={{width:"200px",height:"30px",fontSize:"22px",marginBottom:"20px"}} onClick={()=>{submit()}} disabled={toggle}>REGISTER</button><br/>
    <button style={{width:"200px",height:"30px",fontSize:"22px",marginBottom:"20px"}} onClick={()=>{navigate("/user/signin")}}>SIGNIN</button>
    




  
  
  </div>
  )
}
