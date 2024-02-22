import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [error, setError] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.email.trim() === "" || formData.password.trim() === "") {
      setError("Please enter both email and password.");
      return;
    }

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        console.log("userCredential", userCredential);
      })
      .catch((error) => {
        setError("Invalid email or password.");
        console.log(error);
      });
  };

  return (
    <>
      <div className="rounded-3xl border-dark-blue border-2 form-wrapper w-4/12 mx-auto my-10 p-5">
        <h2 className="text-center text-2xl">Please, log in!</h2>
        <div className="circle rounded-full bg-white w-10 h-10"></div>
        <form
          className="login-form flex flex-col gap-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="username">Your Name</label>
          <input
            className="rounded p-1"
            type="text"
            placeholder="Username"
            value={formData.username}
            name="username"
            onChange={(e) => handleChange(e)}
          ></input>
          <label htmlFor="email">Your Email</label>
          <input
            className="rounded p-1"
            type="text"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={(e) => handleChange(e)}
          ></input>
          <label htmlFor="password">Your Password</label>
          <input
            className="rounded p-1"
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={(e) => handleChange(e)}
          ></input>
          {error && <p className="text-red-500">{error}</p>}
                    <button
            className="login-btn text-center p-3 rounded-3xl text-white bg-light-green mx-auto my-7 w-6/12"
            type="submit"
          >
            Log In
          </button>
        </form>
        <Link
          to="/signup"
          className="flex justify-center p-3 rounded-3xl text-dark-blue m-auto border-2 border-dark-blue w-6/12 hover:bg-light-green hover:text-white"
        >
          Create your Account
        </Link>
      </div>
    </>
  );
}
