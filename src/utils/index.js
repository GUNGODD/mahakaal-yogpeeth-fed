import Mahakaal from "../assets/glimpse/Images/MahakaalLogo.png"
import Mahakaal1 from "../assets/glimpse/Images/Mahakaal1.jpg"
import Mahakaal2 from "../assets/glimpse/Images/Mahakaal2.jpg"
import Mahakaal3 from "../assets/glimpse/Images/Mahakaal3.jpg"
import Mahakaal4 from "../assets/glimpse/Images/Mahakaal4.jpg"
import Mahakaal5 from "../assets/glimpse/Images/Mahakaal5.jpg"
import Mahakaal6 from "../assets/glimpse/Images/Mahakaal6.jpg"
import Mahakaal7 from "../assets/glimpse/Images/Mahakaal7.jpg"
import Mahakaal8 from "../assets/glimpse/Images/Mahakaal8.jpg"
import Mahakaal9 from "../assets/glimpse/Images/Mahakaal9.jpg"
import Mahakaal10 from "../assets/glimpse/Images/Mahakaal10.jpg"
import Mahakaal11 from "../assets/glimpse/Images/Mahakaal11.jpg"
import Mahakaal12 from "../assets/glimpse/Images/Mahakaal12.jpg"
import Mahakaal13 from "../assets/glimpse/Images/Mahakaal13.jpg"
import Mahakaal14 from "../assets/glimpse/Images/Mahakaal14.jpg"
import Mahakaal15 from "../assets/glimpse/Images/Mahakaal15.jpg"
import Mahakaal16 from "../assets/glimpse/Images/Mahakaal16.jpg"

import TextArea1 from "../assets/glimpse/Images/TextArea1.jpg";
import TextArea2 from "../assets/glimpse/Images/TextArea2.jpg";

export{
  Mahakaal,
  Mahakaal1,
  Mahakaal2,
  Mahakaal3,
  Mahakaal4,
  Mahakaal5,
  Mahakaal6,
  Mahakaal7,
  Mahakaal8,
  Mahakaal9,
  Mahakaal10,
  Mahakaal11,
  Mahakaal12,
  Mahakaal13,
  Mahakaal14,
  Mahakaal15,
  Mahakaal16,
  TextArea1,
  TextArea2
}


export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
    Expand: false,
  },
  {
    id: "2",
    title: "Retreat",
    url: "/Retreat/Yoga10",
    Expand: true,
    tagName: "Retreat",
    submenu: [
      { id: "2-1", title: "10 Days Yoga Retreat", url: "/Retreat/Yoga10" },
      { id: "2-2", title: "7 Days Yoga Retreat", url: "/Retreat/Yoga7" },
      { id: "2-3", title: "3 Days Yoga Retreat", url: "/Retreat/Yoga3" },
    ],
  },
  {
    id: "3",
    title: "Gallery",
    url: "/PhotoGallery/Photos",
    Expand: true,
    submenu: [
      { id: "3-1", title: "Photo Gallery", url: "/PhotoGallery/Photos" },
      { id: "3-2", title: "Video Gallery", url: "/PhotoGallery/Videos" },
    ],
  },
  {
    id: "4",
    title: "About",
    url: "/About/AboutUs",
    Expand: true,
    submenu: [
      { id: "4-1", title: "About Mahakaal Yogpeeth", url: "/About/AboutUs" },
      { id: "4-2", title: "Our Teachers", url: "/About/teachers" },
      { id: "4-3", title: "Food and Accommodation", url: "/About/f&a" },
    ],
  },
  {
    id: "5",
    title: "Yoga TTC",
    url: "/ttcyoga/TTC100",
    Expand: true,
    submenu: [
      { id: "5-1", title: "Yoga TTC 100", url: "/ttcyoga/TTC100" },
      { id: "5-2", title: "Yoga TTC 200", url: "/ttcyoga/TTC200" },
    ],
  },
];
