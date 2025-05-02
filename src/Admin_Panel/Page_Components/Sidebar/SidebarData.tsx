import {  EarthLock, House, Newspaper, NotepadText, Users, Contact,GalleryThumbnails, Grab } from "lucide-react";

export const SidebarData = [
  {
    title: 'Home',
    path: '/admin/home',
    icon: <House />,
    cName: 'nav-text'
  },
  {
    title: 'Society',
    path: '/admin/society',
    icon: <EarthLock/>,
    cName: 'nav-text'
  },
  {
    title: 'Members',
    path: '/admin/members',
    icon: <Users />,
    cName: 'nav-text'
  },
  {
    title: 'News',
    path: '/admin/news',
    icon: <Newspaper />,
    cName: 'nav-text'
  },
  {
    title: 'Events',
    path: '/admin/events',
    icon: <NotepadText />,
    cName: 'nav-text'
  },
  {
    title: 'Achievements',
    path: '/admin/societyAchievements',
    icon: <Grab />,
    cName: 'nav-text'
  },
  {
    title: 'Gallery',
    path: '/admin/gallery',
    icon: <GalleryThumbnails />,
    cName: 'nav-text'
  },
  {
    title: 'Roles',
    path: '/admin/roles',
    icon: <Contact />,
    cName: 'nav-text'
  },
  {
    title: 'Coordinators',
    path: '/admin/coordinators',
    icon: <Users />,
    cName: 'nav-text'
  },
  {
    title: 'Testimonials',
    path: '/admin/testimonials',
    icon: <Users />,
    cName: 'nav-text'
  },
];
