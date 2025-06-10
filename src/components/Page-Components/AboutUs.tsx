import { Link } from "react-router-dom";
import about_us from "../../assets/about_us_bg.jpg";
// import { useState, useEffect } from "react";

// const TypewriterText = ({ text, speed }: { text: string; speed: number }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const type = () => {
//       if (index < text.length) {
//         setDisplayedText((prev) => prev + text[index]);
//         setIndex((prevIndex) => prevIndex + 1);
//       } else {
//         setTimeout(() => {
//           setDisplayedText("");
//           setIndex(0);
//         }, 2000);
//       }
//     };
//     const timer = setTimeout(type, speed);
//     return () => clearTimeout(timer);
//   }, [index, text, speed]);

//   return <span>{displayedText}</span>;
// };

const AboutUs = () => {
  // const headingText = "BRIDGING AMBITIONS WITH INNOVATION";
  // const paragraphText =
  //   "WE ARE HERE TO CONNECT STUDENTS WITH OPPORTUNITIES THAT SPARK GROWTH AND COLLABORATION";
  return (
    <>
      {/* <div className="relative mt-0 mx-auto w-full">
        <img
          className="w-full h-80 blur-sm"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Member spotlight intro"
        />
        <div className="absolute inset-0 py-20 lg:py-28 flex flex-col items-center text-center">
          
          <h2 className="text-white text-center text-2xl font-bold mb-4">
            <TypewriterText text={headingText} speed={100} />
          </h2>

          <p className="text-black font-extrabold text-center my-5 text-2xl">
            <TypewriterText text={paragraphText} speed={100} />
          </p>
        </div>
      </div> */}

      <div className="relative min-h-screen flex items-center justify-center">
        <div
          className=" absolute inset-0 bg-no-repeat bg-cover bg-center blur-sm"
          style={{ backgroundImage: `url(${about_us})` }}
        ></div>

        <div className="relative z-10 mx-6 lg:mx-0 ">
          <div className="p-4 bg-white bg-opacity-65 text-gray-900 rounded-lg shadow-lg max-w-5xl mx-auto mt-8 ">
            <h2 className="text-4xl font-semibold text-center mb-5 mt-4">
              About us
            </h2>
            <div className=" text-center text-gray-800">
              <p>
                Welcome to our College Society Management Project, a
                revolutionary platform designed to enhance the efficiency and
                effectiveness of college societies. Our project is dedicated to
                simplifying the management of college societies, providing a
                seamless and user-friendly interface for event planning, member
                management, and communication. We understand the challenges
                society leaders face in organizing activities, tracking
                participation, and keeping everyone informed. Our platform
                addresses these needs by offering robust tools for scheduling
                events, sending announcements, and maintaining comprehensive
                member databases.
                <br />
                <br />
                Our mission is to foster a vibrant and engaging campus community
                where students can easily connect, collaborate, and contribute.
                Through our platform, society leaders can effortlessly
                coordinate events, manage budgets, and promote their activities,
                ensuring that all members are engaged and informed.
                Additionally, our project supports student involvement by
                providing a centralized location for discovering and joining
                societies, making it easier for students to find groups that
                align with their interests and passions.
                <br />
                <br />
                Join us in transforming the way college societies operate,
                making campus life more organized, connected, and enjoyable.
                Whether you're a society leader looking for better management
                tools or a student eager to get involved, our College Society
                Management Project is here to support and enhance your college
                experience. Let's build a dynamic and connected campus community
                together!
              </p>

              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-5">
                {/* <Link to="/" className="px-4 py-2 bg-black text-white rounded text-sm md:text-base">View more
                        </Link> */}
                <Link
                  to="/vision"
                  className="px-4 py-2 bg-black text-white rounded text-sm md:text-base transform transition-transform duration-200 ease-out hover:scale-105"
                >
                  Vision & Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutUs;


