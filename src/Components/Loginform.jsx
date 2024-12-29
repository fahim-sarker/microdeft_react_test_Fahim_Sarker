import React, { useState } from "react";
import axios from "axios";


const Loginform = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post("https://react-interview.crd4lc.easypanel.host/api/login", credentials,
      {
        headers:{
          Accept:"application/json"
        }
      }
    );
    localStorage.setItem("token",JSON.stringify(response.data.data.token))
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-5">
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-lg font-semibold">Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>
      <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
        Login
      </button>
    </form>
  );
};

export default Loginform;
