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
      { id: "2-1", title: "Yoga Retreat", url: "/Retreat/Yoga" },
      { id: "2-2", title: "Meditation Retreat", url: "/Retreat/Meditation" },
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
]