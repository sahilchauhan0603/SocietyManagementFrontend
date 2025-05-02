// import { Contact, LogOut, Settings } from 'lucide-react';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Sidebar.css';

// const Header = () => {
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();

//   const handleShow = () => {
//     setShow(!show);
//   };

//   const handleLogout = () => {
//     // Clear session or any other necessary cleanup
//     sessionStorage.clear(); // or localStorage.clear();
  
//     // Push a new state into the history stack before navigating
//     navigate('/admin', { replace: true });
  
//     // Add an extra history state to block back button navigation
//     window.history.pushState(null, '', window.location.href);
  
//     // Listen for the back button and prevent navigation
//     window.onpopstate = function () {
//       window.history.pushState(null, '', window.location.href);
//     };
//   };

//   return (
//     <div className="flex justify-between bg-slate-100">
//       <div>
//         <Link to="/admin/home" className="ml-2 font-bold text-xl flex items-center">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s"
//             className="h-[61px] navbar-img transition transform duration-500 ease-in-out hover:scale-110"
//             alt="BPIT Logo"
//           />
//         </Link>
//       </div>
//       <div className="px-5 py-4 text-xl font-bold">
//         <Settings onClick={handleShow} />

//         {/* Dropdown options */}
//         <div className={show ? 'options absolute top-10 right-0 w-48' : 'options active'}>
//           <ul className="flex flex-col justify-between items-center text-lg font-bold text-gray-600">
//             <li>
//               <Link to="/contact-us" className="flex justify-between p-2 hover:bg-slate-400">
//                 <Contact />
//                 <span>Contact-Us</span>
//               </Link>
//             </li>
//             <li>
//               <button onClick={handleLogout} className="flex justify-between p-2 w-full hover:bg-slate-400">
//                 <LogOut />
//                 <span>Logout</span>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


import { Contact, LogOut, ChevronDown, User, HelpCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Clear session or any other necessary cleanup
    sessionStorage.clear();
    localStorage.clear();
    
    // Navigate to login page
    navigate('/admin', { replace: true });
    
    // Prevent back navigation
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, '', window.location.href);
    };
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link 
          to="/admin/home" 
          className="flex items-center space-x-2 group"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s"
            className="h-12 transition-transform duration-300 group-hover:scale-105"
            alt="BPIT Logo"
          />
          {/* <span className="text-xl font-bold text-gray-800 hidden md:inline-block">
            Admin Dashboard
          </span> */}
        </Link>

        {/* User Controls */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-1 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-expanded={showDropdown}
            aria-label="User menu"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
              <User size={20} />
            </div>
            <ChevronDown 
              size={16} 
              className={`text-gray-500 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-100">
              <div className="py-1">
                {/* <div className="px-4 py-2 text-sm text-gray-700 border-b">
                  <p className="font-medium">Admin User</p>
                  <p className="text-gray-500 text-xs">Administrator</p>
                </div> */}

                <Link
                  to="/help-center"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => setShowDropdown(false)}
                >
                  <HelpCircle className="mr-3 h-5 w-5 text-gray-400" />
                  Help Center
                </Link>

                <Link
                  to="/contact-us"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => setShowDropdown(false)}
                >
                  <Contact className="mr-3 h-5 w-5 text-gray-400" />
                  Contact Us
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left border-t"
                >
                  <LogOut className="mr-3 h-5 w-5 text-red-400" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;