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

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allPackages",
        Component: AllPackages,
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/logIn", element: <LogIn /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },
  {
    path: "/FooterLayout",
    element: <FooterLayout />,
    children: [
      { path: "/FooterLayout/termsConditions", element: <TermsConditions /> },
      { path: "/FooterLayout/privacyPolicy", element: <PrivacyPolicy /> },
      { path: "/FooterLayout/contactUs", element: <ContactUs /> },
      { path: "/FooterLayout/aboutFooterUs", element: <AboutFooterUs /> },
    ],
  },
]);

export default router;
