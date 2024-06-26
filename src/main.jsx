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
import YogaRetreat10 from "./Components/YogaRetreat10/YogaRetreat10.jsx";
import YogaRetreat7 from "./Components/YogaRetreat7/YogaRetreat7.jsx";
import YogaRetreat3 from "./Components/YogaRetreat3/YogaRetreat3.jsx";
import MainContact from "./Components/Contact/MainContact.jsx";
import MainVideoGallery from "./Components/Video Gallery/MainVideoGallery.jsx";
import TTCTwo from "./Components/YogaTTC/TTCTwo.jsx";
import TTCOne from "./Components/YogaTTC/TTCOne.jsx";
import OurTeacher from "./Components/AboutUs/OurTeacher.jsx";
import Food from "./Components/AboutUs/Food.jsx";
import SubmitSuccess from "./Pages/SubmitSuccess.jsx";

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
  // Gallery section
  {
    path: "/PhotoGallery/Photos",
    element: <MainGallery />,
  },

  // About us

  {
    path: "About/teachers",
    element: <OurTeacher />,
  },
  {
    path: "/About/f&a",
    element: <Food />,
  },

  {
    // Gallery Section single  router
    path: "/About/AboutUs",
    element: <MainAbout />,
  },

  //  Reach out  & separate  navbar Component
  {
    path: "/Contact",
    element: <MainContact />,
  },
  {
    path: "/enroll",
    element: <MainForm />,
  },

  // Retreat
  {
    path: "/Retreat/Yoga10",
    element: <YogaRetreat10 />,
  },
  {
    path: "/Retreat/Yoga7",
    element: <YogaRetreat7 />,
  },
  {
    path: "/Retreat/Yoga3",
    element: <YogaRetreat3 />,
  },

  {
    path: "/PhotoGallery/Videos",
    element: <MainVideoGallery />,
  },

  // Yoga TTC
  {
    path: "/ttcyoga/TTC100",
    element: <TTCOne />,
  },
  {
    path: "/ttcyoga/TTC200",
    element: <TTCTwo />,
  },
  // sucessful submission
  {
    path: "/successfully-submitted",
    element: <SubmitSuccess />,
  },
  // form home Pages
  {
    path: "BackHome",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
