import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import AuthDetails from "./auth/AuthDetails";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import ToggleButton from "./ToggleButton";

export const logo = "/logo.png";
export default function Navbar() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthUser(user);
    });

    return unsubscribe;
  }, []);

  /*
        <ul className="register flex col-span-3">
          <li className="mr-6">
            <Link className="hover:text-blue-800" to="/signup">
              Sign In
            </Link>
          </li>
          <li className="mr-6">
            <Link className="hover:text-blue-800" to="/login">
              Log In
            </Link>
          </li>
        </ul>
 */
  const navLinks = [
    {
      title: "Trailers",
      link: "/trailers",
    },
    {
      title: "Pick One",
      link: "/brAmQuizzes",
    },
    {
      title: "Your Quiz",
      link: "/learn",
    },
    {
      title: "Match",
      link: "/match",
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  console.log("checking the user", authUser);
  return (
    <nav className="navbar w-full h-24 grid sm:grid-cols-3 gap-1 sm:gap-2 md:gap-3 bg-white dark:bg-dark-blue">
      <div className="flex flex-row items-center justify-around gap-2 md:px-10 md:px-7 col-span-3">
        <Link
          className="font-bold cursor-pointer flex items-center text-2x1"
          to="/"
        >
          <img src={logo} alt="logo" className="w-16" />
        </Link>

        {/*navlinks*/}
        <div className="hidden md:block mx-auto">
          <ul className="menu flex items-middle gap-1 sm:gap-2 md:gap-6 lg:gap-8 mx-auto">
            {navLinks.map((link, index) => (
              <Link
                className="text-xl text-dark-blue font-medium dark:text-white text-center rounded-3xl text-white px-2 py-1 bg-light-green w-32 hover:bg-blue"
                key={index}
                to={link.link}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
        {/*hamburger button*/}
        <div className="-mr-2 flex md:hidden">
          <button
            type="button"
            onClick={handleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-black"
          >
            <span className="sr-only">Open Main Menu</span>
            {open === true ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {authUser ? (
          <div className="flex gap-3 items-center">
          <AuthDetails />
          <ToggleButton/>

          </div>
        ) : (
          <ul className="register flex col-span-3">
                        <li className="mr-6">
              <Link className="text-xs md:text-base hover:text-blue-800" to="/login">
                Log In
              </Link>
            </li>
            <ToggleButton className="right-1 mx-1"/>

          </ul>
        )}
      </div>

      {/*mobile menu*/}
      {open ? (
        <ul className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link className="block px-3 py-2" key={index} to={link.link}>
                {link.title}
              </Link>
            ))}
          </div>
        </ul>
      ) : null}
    </nav>
  );
}
