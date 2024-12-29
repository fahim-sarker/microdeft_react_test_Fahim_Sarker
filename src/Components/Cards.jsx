import React, { useEffect, useState } from 'react'
import JS from "../assets/download.png"
import axios from 'axios'

const Cards = () => {
    let [courses, setCourses] = useState([]);


    let token = JSON.parse(localStorage.getItem("token"))
    useEffect(()=>{
        let data = axios.get("https://react-interview.crd4lc.easypanel.host/api/course",
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
        ).then((response)=> setCourses(response.data.data.data))
    })
    

  return (
    <div>
       <div className="container mx-auto md:flex justify-between py-20">
        {
            courses.map((item)=>(
            <div className="md:w-[23%] shadow-xl">
            <div>
                <img style={{ height: "180px", width: "100%" }} src={JS} alt="" />
            </div>
            <button style={{
                fontSize: "24px",
                textAlign:"center",
                color: "#fff",
                margin: "10px 0",
                backgroundColor: `${item.badge_color}`,
                padding: "10px 15px",
                width: "120px",
                textTransform: "capitalize"
            }}>{item.badge_text}</button>
            <h2
                style={{
                fontSize: "20px",
                textAlign: "center",
                paddingTop: "5px",
                fontFamily: "bold",
                }}
            >
                {item.title}
            </h2>
            <p style={{ color: "gray", textAlign: "center", padding:"10px 0" }}>
                {item.description}
            </p>
            <div
                style={{
                border: "2px solid #000",
                fontFamily: "bold",
                textAlign: "center",
                padding: "10px",
                fontSize: "20px",
                }}
            >
                <button>Course Details</button>
            </div>
            </div>
            ))
        }
        </div>
    </div>
  )
}

export default Cards
