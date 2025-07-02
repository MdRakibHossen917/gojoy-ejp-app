import React from "react";
import { createBrowserRouter } from "react-router"; 
import RootLayouts from "../layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import AllPackages from "../Pages/AllPackages/AllPackages";
import AuthLayout from "../layouts/AuthLayout";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import FooterLayout from "../layouts/FooterLayout";
import TermsConditions from "../Pages/FooterLinks/TermsConditions";
import PrivacyPolicy from "../Pages/FooterLinks/PrivacyPolicy";
import ContactUs from "../Pages/FooterLinks/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AboutFooterUs from "../Pages/FooterLinks/AboutFooterUs";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import AddPackage from "../Pages/AddPackage/AddPackage";
import MyBookings from "../Pages/MyBookings/MyBookings";
import ManageMyPackages from "../Pages/ManageMyPackages/ManageMyPackages";
import PrivateRoute from "../routes/PrivateRoutes";
import BookingPageApply from "../Pages/BookingPageApply/BookingPageApply";
import UpdatePackage from "../Pages/ManageMyPackages/UpdatePackage";
import axios from "axios";
import Blogs from "../Pages/Shared/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      { index: true, element: <Home /> },
      { path: "allPackages", element: <AllPackages /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "/blogs", element: <Blogs /> },
      {
        path: "packages/:id",
        element: (
          <PrivateRoute>
            <PackageDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/packages/${params.id}`
          );
          return res.data;
        },
      },
      {
        path: "bookingPageApply/:id",
        element: (
          <PrivateRoute>
            <BookingPageApply />
          </PrivateRoute>
        ),
      },
      {
        path: "myBookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "addPackage",
        element: (
          <PrivateRoute>
            <AddPackage />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-my-packages",
        element: (
          <PrivateRoute>
            <ManageMyPackages />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-my-packages-update/:id",
        element: (
          <PrivateRoute>
            <UpdatePackage />
          </PrivateRoute>
        ),
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "logIn", element: <LogIn /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "FooterLayout",
    element: <FooterLayout />,
    children: [
      { path: "termsConditions", element: <TermsConditions /> },
      { path: "privacyPolicy", element: <PrivacyPolicy /> },
      { path: "contactUs", element: <ContactUs /> },
      { path: "aboutFooterUs", element: <AboutFooterUs /> },
    ],
  },
]);

export default router;
