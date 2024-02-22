import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useAppContext } from "../../context/AppProvider";

const AuthDetails = () => {
  const { authUser, setAuthUser, userSignOut } = useAppContext();

  //moved to Provider
  /*
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

  */
  return (
    <div className="flex gap-4 items-center">
      {authUser ? (
        <>
          <p>{`Hello, ${authUser.email}!`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed out</p>
      )}
    </div>
  );
};

export default AuthDetails;
