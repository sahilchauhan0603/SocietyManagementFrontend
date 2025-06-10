import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";

import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle.jsx";
import { buttonVariants } from "./ui/button";
import { Link , useNavigate } from "react-router-dom";

import msalInstance from "./msalConfig";
//import { AccountInfo } from "@azure/msal-browser";

const routeList = [
  {
    href: "/",
    label: "Home",
  },

  // {
  //   href: "/vision",
  //   label: "Our Vision",
  // },
  {
    href: "/BecomeMember",
    label: "Join a Society",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },
  {
    href: "/about-us",
    label: "About us",
  },

  {
    href: "/all-news",
    label: "News",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 // const [account, setAccount] = useState<AccountInfo | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  async () => {
    try {
      await msalInstance.initialize();
    } catch (error) {
      console.error("MSAL initialization failed:", error);
    }
  };

  // const handleLogout = () => {
  //   msalInstance.logoutPopup();
  //   setAccount(null);
  //   localStorage.removeItem("msalAccount");
  // };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login"); 
  };

  // Check if user is already logged in
  // useEffect(() => {
  //   const storedAccount = localStorage.getItem("msalAccount");
  //   if (storedAccount !== null) {
  //     // storedAccount is guaranteed to be a string here
  //     try {
  //       const parsedAccount = JSON.parse(storedAccount);
  //       setAccount(parsedAccount);
  //     } catch (error) {
  //       console.error("Error parsing stored account:", error);
  //     }
  //   }
  // }, []);
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full overflow-x-hidden border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <NavigationMenu>
        <NavigationMenuList className="container h-14  w-screen flex  items-center justify-between">
          {/* logo */}
          <NavigationMenuItem className="font-bold flex">
            <Link to="/" className="ml-2 font-bold text-xl flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s"
                className="h-12 navbar-img transition transform duration-500 ease-in-out hover:scale-110"
                alt="BPIT Logo"
              />
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Name</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }) => (
                    <Link
                      key={label}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      style={{ width: "100%" }}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}

                  <Link
                    to="/"
                    className="bg-gray-200 text-purple-800 px-4 py-2 rounded "
                  >
                    Login
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route, i) => (
              <Link
                to={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}

            <nav>
              <ul>
                {isLoggedIn ? (
                  <li>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="bg-gray-200 text-purple-800 px-4 py-2 rounded hover:text-red-500 hover:bg-black transition transform duration-500 ease-in-out hover:scale-125"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li>
                    <div
                      className="bg-gray-200 text-purple-800 px-4 py-2 rounded hover:text-red-500 hover:bg-black transition transform duration-500 ease-in-out hover:scale-125"
                    >
                      <Link to="/login">Login</Link>
                    </div>
                  </li>
                )}
              </ul>
            </nav>

            <div className="hidden md:flex gap-2 md:ml-5 transition transform duration-300 ease-in-out hover:scale-110">
              <ModeToggle />
            </div>
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;

