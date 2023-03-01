import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Show from './view';







export default function Home() {
    const navigate = useNavigate();
    const [data, setData] = useState()

    const [View,setView]=useState(false)

    const [resdata,setresdata]=useState()

    const [Search, setSearch] = useState({ title: "" })

    const [user, setuser] = useState("")


    useEffect(() => {

        async function main() {


            const headers = {
                "Authorization": sessionStorage.getItem("token")
            }


            const res = await axios.post("https://recipe-app-290d.onrender.com/user/logedin", headers)

         

            setuser(res.data)




        }

        main()




    }, [])




    useEffect(() => {



        async function data() {
            if (Search.title) {

                await axios.get(`https://recipe-app-290d.onrender.com/user/home/${Search.title}`).then((data) => {
                    setData(data.data.post)
                })
            }
            else {

                await axios.get("https://recipe-app-290d.onrender.com/user/home").then((data) => {
                    setData(data.data.post)
                })
            }

        }
        data()

    }, [Search])


    function logout() {

        sessionStorage.clear()
        navigate("/")
        alert("loged out........")
        
        return

    }


    if (!sessionStorage.getItem("token")) {
        navigate("/")
       
    }







    return (
        <>

            
         


            <img style={{ width: "10%", height: "12%", cursor: "pointer", position: "fixed", left: "0px", cursor: "pointer" }} data-hover="logout" onClick={() => { logout() }} src='https://media.istockphoto.com/id/981368726/vector/restaurant-food-drinks-logo-fork-knife-background-vector-image.jpg?s=612x612&w=0&k=20&c=9M26CBkCyEBqUPs3Ls5QCjYLZrB9sxwrSFmnAmNCopI='></img>
     {
        !View&&
            <div className='home-container' >




                <input type="text" className='search' onChange={(e) => { setSearch({ ...Search, title: e.target.value }) }} placeholder="SEARCH YOUR  FOOD HERE..." style={{ width: "350px", height: "30px", fontSize: "22px", marginBottom: "20px" }} /><br />

                <div style={{}} onClick={() => { navigate("/user/post") }}>
                    <img style={{ width: "5%", height: "8%", cursor: "pointer" }} src='https://cdn-icons-png.flaticon.com/512/3595/3595455.png' ></img>
                </div>



                <h4>ALL RECIPES</h4>

                {
                    data ? data.map((data) => {


                        return (
                            <div className='card'  onClick={(e)=>{setresdata(data._id)}}>
                                <img style={{ width: "100%", height: "100%", cursor: "pointer", hover: "transform: scale(1.5)" }} src={data.image} onClick={()=>{setView(!View)}}></img>
                                <h1 style={{ marginBottom: "20%", color: "white" }}>{data.title}</h1>
                            </div>
                        )



                    })
                        : ""


                }




            </div>



            }
            
            
{
View&&
     <Show id={resdata}/>
}

        </>
    )
}
