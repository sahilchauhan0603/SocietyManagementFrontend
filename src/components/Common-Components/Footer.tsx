import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white p-6 shadow-md mt-0">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-start">
          <div>
            <div className="pb-4 md:mb-0">
              Bhagwan Parshuram Institute Of Technology , New Delhi <br/>
              PSP-4, Dr. KN Katju Marg, Sector-17, Rohini, New Delhi-110089
            </div>
            <div className="font-semibold text-yellow-400 mb-2">Contact Us</div>
            <div className="mb-2">
              <div>Email: bpitindia@yahoo.com</div>
              <div>Phone: 011-2757 1080</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-yellow-400 ">
                Links
              </h2>
              <ul className="font-medium">

                <li className="hover:underline">
                  <Link
                    className="hover:underline"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:underline"
                    to="/about-us"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:underline"
                    to="/vision"
                  >
                    Vision
                  </Link>
                </li>

                <li>
                <Link
                    className="hover:underline"
                    to="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>

              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-yellow-400 ">
                Follow us
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="m-4">
                  <a
                    href="https://www.linkedin.com/school/bhagwan-parshuram-institute-of-technology/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROp-tVE-R6e5Uw_LRnOl1kC5MMXciei-j0VQ&s"
                      alt="LinkedIn"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  </a>
                </li>
                <li className="m-4">
                  <a
                    href="https://www.instagram.com/bpitindia/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://th.bing.com/th?id=OIP.-ZirgQE5pr8e7htQWowJIgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                      alt="Instagram"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <div className="text-left text-xs space-x-2">
            <span className="text-gray-400">Copyright © 2024</span>
            <span className="text-gray-500">|</span>
            <a href="#">Disclaimer</a>
            <span className="text-gray-500">|</span>
            <a href="#">Terms of Use</a>
            <span className="text-gray-500">|</span>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
