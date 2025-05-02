




import { useState } from 'react';
import { Link, useParams,useLocation } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { Menu, X } from 'lucide-react';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation(); // Get the current route
  
  const searchParams = useParams();
 
  const showSidebar = () => setSidebar(!sidebar);


  return (
    <div className='h-[800px] relative'>
      <div className='navbar dark:bg-black'>
        <Link to='#' className='menu-bars'>
          <Menu onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
      {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> */}
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <X color="white" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {

            // For other items, dynamically build the path
            const path = (item.title === 'Contact Us' || item.title === 'Logout')
              ? item.path
              : (searchParams.societyID ? `${item.path}/${searchParams.societyID}` : item.path);

            return (
              <li key={index} className={item.cName}>
                {/* <Link to={path} className={location.pathname === item.path ? 'active' : ''}>
                  {item.icon}
                  <span className={sidebar ? 'linktext' : 'linktext active'}>{item.title}</span>
                </Link> */}
                <Link
                  to={path}
                  className={location.pathname.startsWith(item.path) ? 'active' : ''}
                >                
                  {item.icon}
                  <span className={sidebar ? 'linktext' : 'linktext active'}>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

    </div>
  );
}

export default Sidebar;
