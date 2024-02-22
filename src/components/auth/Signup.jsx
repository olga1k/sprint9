import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Update user profile
        updateProfile(auth.currentUser, {
          displayName: formData.username,
        }).then(() => {
          // Profile updated successfully!
          console.log("Profile updated successfully!");
          // Navigate to the login page
          navigate("/login");
        }).catch((error) => {
          // An error occurred while updating the profile
          console.error("Error updating profile:", error);
        });
      })
      .catch((error) => {
        console.log(error);
      });

      console.log("user name", displayName)
  };

  return (
    <>
      <div className="border-dark-blue rounded-3xl border-2 form-wrapper w-4/12 mx-auto my-10 p-5">
        <h2 className="text-center text-2xl">Create Your Awesome Account</h2>
        <div className="circle rounded-full bg-white w-10 h-10"></div>
        <form
          className="login-form flex flex-col gap-2"
          onSubmit={(e) => signUp(e)}
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
          <button
            className="login-btn text-center p-3 rounded-3xl text-white bg-light-green mx-auto my-7 w-6/12"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
