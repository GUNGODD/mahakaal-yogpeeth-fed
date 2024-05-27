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
    url: "/Retreat",
    Expand: true,
    tagName: "Retreat",
    submenu: [
      { id: "2-1", title: "10 Days Yoga Retreat", url: "/Retreat/Yoga10" },
      { id: "2-2", title: "7 Days Yoga Retreat", url: "/Retreat/Yoga7" },
      { id: "2-2", title: "3 Days Yoga Retreat", url: "/Retreat/Yoga3" },
      
    ],
  },
  {
    id: "3",
    title: "Gallery",
    url: "/PhotoGallery",
    Expand: true,
    submenu: [
      { id: "3-1", title: "Photo Gallery", url: "/PhotoGallery/Photos" },
      { id: "3-2", title: "Video Gallery", url: "/PhotoGallery/Videos" },
    ],
  },
  {
    id: "4",
    title: "About",
    url:"/about",
    Expand:true,
    submenu: [
      { id: "3-1", title: "About Mahakaal Yogpeeth", url: "/About/Aboutus" },
      { id: "3-2", title: "Our Teachers", url: "/About/teachers" },
      { id: "3-3", title: "Food and Accomodation", url: "/About/f&a" },
    ],
  },
  ,
  {
    id: "5",
    title: "Yoga TTC",
    url:"/about",
    Expand:true,
    submenu: [
      { id: "3-1", title: "Yoga TTC 100", url: "/About/Aboutus" },
      { id: "3-2", title: "Yoga TTC 300", url: "/About/teachers" },
      { id: "3-3", title: "Yoga TTC 500", url: "/About/f&a" },
    ],
  },
  
];