import axios from "axios";
import React, { useState } from "react";


const Courseform = () => {
     const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    badge_text: "",
    badge_color: "",
  });

  let handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };
  

  let token = JSON.parse(localStorage.getItem("token"))


  let handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post("https://react-interview.crd4lc.easypanel.host/api/course", courseData,
      {
        headers:{
          Accept:"application/json",
          Authorization : `Bearer ${token}`
        }
      }
    );
    console.log(response.data);
    
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-5">
      <div className="mb-4">
        <label htmlFor="title" className="block text-lg font-semibold">Course Title</label>
        <input
          type="text"
          name="title"
          value={courseData.title}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-lg font-semibold">Description</label>
        <textarea
          name="description"
          value={courseData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="badge_text" className="block text-lg font-semibold">Badge Text</label>
        <input
          type="text"
          name="badge_text"
          value={courseData.badge_text}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="badge_color" className="block text-lg font-semibold">Badge Color</label>
        <input
          type="color"
          name="badge_color"
          value={courseData.badge_color}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="instructor_name" className="block text-lg font-semibold">Instructor Name</label>
        <input
          type="text"
          name="instructor_name"
          value={courseData.instructor_name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>
      <button type="submit" className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
        Add Course
      </button>
    </form>
    </>
  )
}

export default Courseform
