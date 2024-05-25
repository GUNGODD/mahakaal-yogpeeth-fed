import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import YogaCenter from "./Pages/YogaCenter.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import MainGallery from "./Components/Gallery/MainGallery.jsx";
import { MainAbout } from "./Components/AboutUs/MainAbout.jsx";
import MainForm from "./Components/FormArea/MainForm.jsx";
// import { createRoot } from 'react-dom/client';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/yogacenter",
    element: <YogaCenter />,
  },
  {
    path: "/Home",
    element: <App />,
  },

  {
    path: "/PhotoGallery/Photos",
    element: <MainGallery />
  },


  {
    path: "/AboutUs",
    element: <MainAbout />
  },
  {
    path: "/enroll",
    element: <MainForm />
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
