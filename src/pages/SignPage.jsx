import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://localhost:9000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: 'cors',
      body: JSON.stringify(formData),
    })
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not OK');
        }
      })
      .then((data) => {
        //const parsedData = JSON.parse(data);
        console.log("parsedData", data);
      })
      .catch((error) => console.log("error", error));

      console.log(formData)
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-wrapper">
      <h2>Create your account</h2>
      <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">username</label>
        <input
          value={formData.username}
          name="username"
          placeholder="username"
          type="text"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="email">email</label>
        <input
          value={formData.email}
          name="email"
          placeholder="email"
          type="text"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="password">password</label>
        <input
          value={formData.password}
          name="password"
          placeholder="password"
          type="password"
          onChange={(e) => handleChange(e)}
        />
        <button className="form-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
