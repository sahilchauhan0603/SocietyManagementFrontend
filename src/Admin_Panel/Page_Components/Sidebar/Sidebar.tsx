




// import { useState } from 'react';
// import { Link, useParams,useLocation } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
// import './Sidebar.css';
// import { Menu, X } from 'lucide-react';

// function Sidebar() {
//   const [sidebar, setSidebar] = useState(false);
//   const location = useLocation(); // Get the current route
  
//   const searchParams = useParams();
 
//   const showSidebar = () => setSidebar(!sidebar);


//   return (
//     <div className='h-[800px] relative'>
//       <div className='navbar dark:bg-black'>
//         <Link to='#' className='menu-bars'>
//           <Menu onClick={showSidebar} />
//         </Link>
//       </div>
//       <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
//       {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> */}
//         <ul className='nav-menu-items' onClick={showSidebar}>
//           <li className='navbar-toggle'>
//             <Link to='#' className='menu-bars'>
//               <X color="white" />
//             </Link>
//           </li>
//           {SidebarData.map((item, index) => {

//             // For other items, dynamically build the path
//             const path = (item.title === 'Contact Us' || item.title === 'Logout')
//               ? item.path
//               : (searchParams.societyID ? `${item.path}/${searchParams.societyID}` : item.path);

//             return (
//               <li key={index} className={item.cName}>
//                 {/* <Link to={path} className={location.pathname === item.path ? 'active' : ''}>
//                   {item.icon}
//                   <span className={sidebar ? 'linktext' : 'linktext active'}>{item.title}</span>
//                 </Link> */}
//                 <Link
//                   to={path}
//                   className={location.pathname.startsWith(item.path) ? 'active' : ''}
//                 >                
//                   {item.icon}
//                   <span className={sidebar ? 'linktext' : 'linktext active'}>{item.title}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//     </div>
//   );
// }

// export default Sidebar;


import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const searchParams = useParams();

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector('.nav-menu');
      if (sidebarOpen && sidebar && !sidebar.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  return (
    <div className="flex">
      {/* Hamburger Menu (always visible) */}
      <div className={`fixed top-4 left-4 z-50 lg:hidden ${sidebarOpen ? 'hidden' : 'block'}`}>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md text-gray-700 hover:bg-gray-200 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <nav
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white transition-all duration-300 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:w-20 lg:hover:w-64 group`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className={`text-xl font-bold whitespace-nowrap overflow-hidden transition-opacity ${
            sidebarOpen ? 'opacity-100' : 'lg:opacity-0 lg:group-hover:opacity-100'
          }`}>
            Admin Panel
          </h2>
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-700 lg:hidden"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Items */}
        <ul className="p-2 space-y-1 overflow-y-auto h-[calc(100vh-65px)]">
          {SidebarData.map((item, index) => {
            const path = (item.title === 'Contact Us' || item.title === 'Logout')
              ? item.path
              : (searchParams.societyID ? `${item.path}/${searchParams.societyID}` : item.path);

            const isActive = location.pathname.startsWith(item.path);
            const hasSubmenu = item.submenu && item.submenu.length > 0;

            return (
              <li key={index}>
                {hasSubmenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className={`flex items-center w-full p-3 rounded-lg hover:bg-gray-800 transition-colors ${
                        isActive ? 'bg-blue-600 hover:bg-blue-700' : ''
                      }`}
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className={`ml-3 whitespace-nowrap ${
                        sidebarOpen ? 'opacity-100' : 'lg:opacity-0 lg:group-hover:opacity-100'
                      }`}>
                        {item.title}
                      </span>
                      <span className={`ml-auto ${
                        sidebarOpen ? 'opacity-100' : 'lg:opacity-0 lg:group-hover:opacity-100'
                      }`}>
                        {activeSubmenu === item.title ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </span>
                    </button>

                    {/* Submenu */}
                    {activeSubmenu === item.title && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.submenu?.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.path}
                              className={`flex items-center p-2 pl-6 rounded-lg hover:bg-gray-800 ${
                                location.pathname === subItem.path ? 'text-blue-400' : ''
                              }`}
                            >
                              <span className={`whitespace-nowrap ${
                                sidebarOpen ? 'opacity-100' : 'lg:opacity-0 lg:group-hover:opacity-100'
                              }`}>
                                {subItem.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={path}
                    className={`flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors ${
                      isActive ? 'bg-blue-600 hover:bg-blue-700' : ''
                    }`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className={`ml-3 whitespace-nowrap ${
                      sidebarOpen ? 'opacity-100' : 'lg:opacity-0 lg:group-hover:opacity-100'
                    }`}>
                      {item.title}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;