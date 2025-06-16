import React, { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";
 

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // if I log in than firstly called This
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
   
      if (currentUser?.email) {

        axios
          .post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            {
              email: currentUser.email,
            },
            {
              withCredentials: true, //mandatory to store token in Browser cookie
            }
          )
          .then((res) => {
            // localStorage.setItem("token", res.data.token); // to store in localstorage in browser only
         
            console.log(res.data);
          })
          .catch((err) => {
            console.error("JWT token fetch error", err);
            localStorage.removeItem("token"); // safety
          });
      } else {
        localStorage.removeItem('token');
      }
  
      setLoading(false);
    });
  
    return () => unSubscribe();
  }, []);
  

    

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    localStorage.removeItem("token");
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    loading,
    user,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
