import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Home from './home';




export default function Show(props) {
    const navigate = useNavigate();

    const [data, setdata] = useState()

    const [ingre, setingre] = useState(false)
    const [direc, setdirec] = useState(false)

    let id = props.id

    useEffect(() => {


        async function main() {

            const res = await axios.get(`https://recipe-app-290d.onrender.com/user/home/view/${id}`)

            if (res.data) {


                setdata(res.data.post)
            }


        }



        main()


    }, [])



    function logout() {

        sessionStorage.clear()
        navigate("/")

    }



function ingredients(){

setdirec(false)
setingre(true)



}
function directions(){
    


    setdirec(true)
    setingre(false)
    



}














    console.log(data)

    return (
        <div className='home-container' style={{ display: "inline" }}>
            <img style={{ width: "10%", height: "12%", cursor: "pointer", position: "fixed", left: "0px", cursor: "pointer" }} onClick={() => { logout() }} src='https://media.istockphoto.com/id/981368726/vector/restaurant-food-drinks-logo-fork-knife-background-vector-image.jpg?s=612x612&w=0&k=20&c=9M26CBkCyEBqUPs3Ls5QCjYLZrB9sxwrSFmnAmNCopI='></img>


            <button style={{ width: "250px", height: "30px", cursor: "pointer", marginBottom: "20px" }} onClick={() => { window.location.reload() }}>HOME</button>

            {
                data ? data.map((data) => {

                    return (

                        <div >



                            <div style={{ display: "inline", width: "300px", height: "300px" }} className="card">
                                <img style={{ width: "30%", height: "30%" }} src={data.image}></img>


                                <div style={{ position: "fixed", right: "60px", top: "20px" }}>
                                    <button style={{ width: "250px", height: "30px", backgroundColor: "blue", cursor: "pointer", color: "white", marginBottom: "20px" }} onClick={() => { ingredients()}}>ingredient</button><br />
                                    <button style={{ width: "250px", height: "30px", backgroundColor: "blue", cursor: "pointer", color: "white", marginBottom: "20px" }} onClick={() => { directions() }}>directions</button>
                                </div>

                            </div>

                            <div style={{ display: "inline" }}>
                                {

                                  direc&&<h2 style={{ color: "white" }}>{data.directions}</h2>
                                }




                                {

                                  !direc&&ingre && <div>{


                                        data ? data.ingredients.map(data => {

                                            return (
                                                <li style={{ color: "white" }}>{data}</li>
                                            )


                                        }) : ""

                                    }











                                    </div>
                                }


                            </div>
















                        </div>
                    )

                })

                    : ""



            }








        </div>
    )
}
