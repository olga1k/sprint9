import React, { useState, useEffect, createContext, useContext } from "react";
//import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const appContext = createContext();
export function useAppContext() {
  return useContext(appContext);
}

export default function AppProvider({ children }) {
  //CHANGE HEADER ON SCROLL DON'T DELETE
  /*
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.background = "#73e0da";
  } else {
    document.getElementById("header").style.background = "transparent";
  }
}
*/

//AUTHENTICATION from AuthDetails
const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      console.log("listen fired");
      if (user) {
        console.log("user", user);
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out successfully");
      })
      .catch((error) => console.log(error));
  };

  //DARK LIGHT THEMES

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const contextValue = {
    theme,
    handleThemeSwitch,
    authUser,
    userSignOut
  };

  return (
    <>
      <appContext.Provider value={contextValue}>{children}</appContext.Provider>
    </>
  );
}
