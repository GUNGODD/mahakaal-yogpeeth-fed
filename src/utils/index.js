
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
    url: "/about",
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
    url: "/ttcyoga",
    Expand: true,
    submenu: [
      { id: "5-1", title: "Yoga TTC 100", url: "/ttcyoga/TTC100" },
      { id: "5-2", title: "Yoga TTC 200", url: "/ttcyoga/TTC200" },
    ],
  },
];
