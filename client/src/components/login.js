import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
export default function Login() {

const navigate=useNavigate();

const [user,setuser]=useState({email:"",password:""})

const [Userdata,setUserdata]=useState()

async function sigin(userdata){

    try{
   
        const res=await axios.post("https://recipe-app-290d.onrender.com/user/signin",userdata)

  
        if(res){
            
            setUserdata(res.data.user)

            sessionStorage.setItem("token",res.data.token)
          
        
        if(!res.data.message){

            alert("SIGNIN SUCESS")
            navigate("/user/home")
        }

        else{
            alert("email or password is wrong")
        }

    }
    if(!res){
        alert("invalid password or mail")

    }




    }
    catch(e){

        console.log(e.message)
        alert("invalid password")


    }

}


function submit(){

    const emailreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(user){
        if(!user.email){
            alert("enter email")
            return
        }
        
        if(!user.email.match(emailreg)){
            alert("not a valid email")
        }

        else{
            sigin(user)
        }

    }
    

}






  return (
    <div className='login-container'>
      <h1>SIGNIN</h1>

      <input type="email" placeholder='email' style={{width:"350px",height:"30px",fontSize:"22px",marginBottom:"20px"}} onChange={(e)=>{setuser({...user,email:e.target.value})}} ></input><br/>
      <input type="password" placeholder='password' style={{width:"350px",height:"30px",fontSize:"22px",marginBottom:"20px"}}  onChange={(e)=>{setuser({...user,password:e.target.value})}}></input><br/>
     
       <input type="checkbox"></input><p style={{color:"white"}}>"REMEMBER ME"</p>
      <button style={{width:"200px",height:"30px",fontSize:"22px",marginBottom:"20px"}} onClick={()=>{submit()}}>SIGNIN</button><br/>
      <button style={{width:"200px",height:"30px",fontSize:"22px",marginBottom:"20px"}} onClick={()=>{navigate("/user/signup")}}>REGISTER</button>




    
    
    </div>
  )
}
