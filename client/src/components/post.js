import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Filebase64 from 'react-file-base64';


export default function Post() {

    const navigate=useNavigate();

    const [recipe,setrecipe]=useState({

        title:"",
        author:"",
        image:"",
        ingredients:[],
        directions:""

    })

   async function post(){
    if(recipe.title.length==0||recipe.author.length==0){

        alert("title and author canot be empty")

        return

    }
   
     try{
    
        const res=await axios.post("http://localhost:5002/user/post",recipe)

      console.log(res)


        navigate("/user/home")

   }
     catch(e){

        console.log(e.message)


     }




    }

  



  return (
    <div className='login-container'>
    <button  style={{width:"250px",height:"30px",cursor:"pointer",marginBottom:"20px"}} onClick={()=>{navigate("/user/home")}}>HOME</button>
    <h1>post</h1>
   <input style={{width:"350px",height:"30px",fontSize:"22px",marginBottom:"20px"}} placeholder="title" onChange={(e)=>{setrecipe({...recipe,title:e.target.value})}} type="text"></input>
    <input style={{width:"350px",height:"30px",fontSize:"22px",marginBottom:"20px"}} placeholder="author" onChange={(e)=>{setrecipe({...recipe,author:e.target.value})}} type="text"></input>
    
    <div>
    <Filebase64 onDone={(file) => { setrecipe({ ...recipe, image: file.base64 }) }} />
</div>
<div>
    {recipe.image && <img style={{ width: "200px" }} src={recipe.image} alt="" />}
</div>

    <input style={{width:"350px",height:"30px",fontSize:"22px",marginBottom:"20px"}} placeholder="type-ingredient-with comma separate" onChange={(e)=>{setrecipe({...recipe,ingredients:(e.target.value).split(",")})}} type="text"></input>

    <input style={{width:"350px",height:"30px",fontSize:"22px",marginBottom:"20px"}} placeholder="directions"  type="text" onChange={(e)=>{setrecipe({...recipe,directions:e.target.value})}}></input>
    
    <button style={{width:"250px",height:"30px",fontSize:"22px",marginBottom:"20px"}} onClick={()=>{post()}}>POST RECIPE</button>
    </div>
  )
}
