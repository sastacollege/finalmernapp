import { useState } from "react";
import axios from "axios";

function Register() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(userData);

  function handleSubmit(e) {
    e.preventDefault();

    //HERE DATABASE
    try {
      const responseData = axios.post("https://finalmernapp-beta.vercel.app/api/v1/users/register", userData);
      if (responseData) alert("DATA SENT SUCCESSFULLY");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="registrationForm">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
