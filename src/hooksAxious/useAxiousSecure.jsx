import axios from "axios";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiousSecure = () => {
  const { user, signOutUser } = useContext(AuthContext);
  //   const token = localStorage.getItem("token");
  const token = user?.accessToken;
  //intercept request
  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  });

  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.status === 401 || err.status === 403) {
        signOutUser()
          .then(() => {
            console.log(
              `you are logged out bcz of an error with ${err.status} code`
            );
          })
          .catch((err) => console.log(err));
      }
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};

export default useAxiousSecure;
