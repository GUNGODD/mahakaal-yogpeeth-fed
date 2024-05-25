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
      { id: "2-2", title: "3 Days Yoga Retreat", url: "/Retreat/Meditation3" },
      
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
    title: "About Us",
    url: "/AboutUs",
    Expand: false,
  },
];