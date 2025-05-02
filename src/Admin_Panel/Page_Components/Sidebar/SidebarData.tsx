// import {  EarthLock, House, Newspaper, NotepadText, Users, Contact,GalleryThumbnails, Grab } from "lucide-react";

// export const SidebarData = [
//   {
//     title: 'Home',
//     path: '/admin/home',
//     icon: <House />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Society',
//     path: '/admin/society',
//     icon: <EarthLock/>,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Members',
//     path: '/admin/members',
//     icon: <Users />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'News',
//     path: '/admin/news',
//     icon: <Newspaper />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Events',
//     path: '/admin/events',
//     icon: <NotepadText />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Achievements',
//     path: '/admin/societyAchievements',
//     icon: <Grab />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Gallery',
//     path: '/admin/gallery',
//     icon: <GalleryThumbnails />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Roles',
//     path: '/admin/roles',
//     icon: <Contact />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Coordinators',
//     path: '/admin/coordinators',
//     icon: <Users />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Testimonials',
//     path: '/admin/testimonials',
//     icon: <Users />,
//     cName: 'nav-text'
//   },
// ];


import { 
  House, 
  EarthLock, 
  Users, 
  Newspaper, 
  Shield
} from "lucide-react";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/admin/home',
    icon: <House size={20} />,
    cName: 'nav-text'
  },
  {
    title: 'Societies',
    path: '/admin/society',
    icon: <EarthLock size={20} />,
    cName: 'nav-text',
    submenu: [
      {
        title: 'All Societies',
        path: '/admin/society'
      },
      {
        title: 'Achievements',
        path: '/admin/societyAchievements'
      },
      {
        title: 'Testimonials',
        path: '/admin/testimonials'
      }
    ]
  },
  {
    title: 'People',
    path: '/admin/members',
    icon: <Users size={20} />,
    cName: 'nav-text',
    submenu: [
      {
        title: 'All Members',
        path: '/admin/members'
      },
      {
        title: 'Coordinators',
        path: '/admin/coordinators'
      },
      {
        title: 'Roles',
        path: '/admin/roles'
      }
    ]
  },
  {
    title: 'Content',
    path: '/admin/news',
    icon: <Newspaper size={20} />,
    cName: 'nav-text',
    submenu: [
      {
        title: 'News',
        path: '/admin/news'
      },
      {
        title: 'Events',
        path: '/admin/events'
      },
      {
        title: 'Gallery',
        path: '/admin/gallery'
      }
    ]
  },
  {
    title: 'Administration',
    path: '/admin/settings',
    icon: <Shield size={20} />,
    cName: 'nav-text',
    submenu: [
      {
        title: 'System Settings',
        path: '/admin/settings'
      },
      {
        title: 'Contact Messages',
        path: '/admin/contact'
      }
    ]
  }
];