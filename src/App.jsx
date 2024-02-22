import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignPage from "./pages/SignPage";
import Trailer from "./components/Trailer";
import Trailers from "./pages/Trailers";
import BrAmQuiz from "./components/BrAmQuiz";
import RandomQuote from "./components/RandomQuote";
import Authenticate from "./pages/Authenticate";
import Blog from "./pages/Blog";
import BlogPost from "./components/BlogPost";
import BrAmQuizzes from "./pages/BrAmQuizzes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppProvider";
import React, { useEffect, useState } from "react";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import Animation from "./components/Animation";
import LearnWords from "./components/LearnWords";
import { Space } from "./components/Space";
import Match from "./components/Match";
import ProtectedRoute from "./utils/ProtectedRoute";

//className="dark:bg-black"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { authUser, setAuthUser, userSignOut, handleThemeSwitch, theme } =
    useAppContext();

    useEffect(() => {
      if (authUser) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }, [authUser]); 

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className={`bg-body ${theme === "dark" ? "dark" : ""}`}>
        {" "}
        <Animation />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="blog"
            element={<Blog />}
          />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="trailers" element={<Trailers />} />
          <Route path="trailers/:id" element={<Trailer />} />
          <Route path="brAmQuizzes" element={<BrAmQuizzes />} />
          <Route path="brAmQuizzes/:id" element={<BrAmQuiz />} />
          <Route path="random" element={<RandomQuote />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="learn" element={<LearnWords />} />
          <Route path="match" element={<Match />} />
        </Routes>
        <Space /> <Footer />
      </div>
    </>
  );
}

export default App;
