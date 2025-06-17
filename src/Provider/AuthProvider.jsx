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

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        try {
          const token = await currentUser.getIdToken();
          localStorage.setItem("token", token); // Store Firebase Token

          // Optionally, call some protected API here, passing token in header
          // Example:
          // await axios.get(`${import.meta.env.VITE_API_URL}/packages`, {
          //   headers: { Authorization: `Bearer ${token}` }
          // });
        } catch (err) {
          console.error("Error getting Firebase token", err);
          localStorage.removeItem("token");
        }
      } else {
        localStorage.removeItem("token");
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
