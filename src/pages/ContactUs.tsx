import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
// import { useState, useEffect } from "react";
import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const schema = z.object({
  Name: z.string().nonempty("Name is required"),
  Email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  Message: z.string().nonempty("Message is required"),
  ContactNo: z.string().nonempty("Contact is required"),
  Subject: z.string().nonempty("Subject is required"),
  Society: z.string().nonempty("Invalid Society"),
  Batch: z.string().nonempty("Invalid batch"),
  Branch: z.string().nonempty("Branch name is required"),
});

const Branch = ["CSE", "IT", "CSE-DS", "ECE", "EEE", "AIDS"];

const Batch = [
  "2020-2024",
  "2021-2025",
  "2022-2026",
  "2023-2027",
  "2024-2028",
  "2025-2029",
];

const society = [
  "None",
  "Namespace",
  "Anveshan",
  "Hash Define",
  "GDSC",
  "WIBD",
  "IEEE",
  "WIE",
  "Electonauts",
  "Opti Click",
  "Mavericks",
  "Octave",
  "Panache",
  "Avaran",
  "Kalam",
  "Dhrishti",
  "Chromavita",
];

const classes =
  "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded bg-gray-200";

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

const ContactUs = () => {
  type formData = z.infer<typeof schema>;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: formData) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/contact`, data, {
        // const response = await axios.post(`http://localhost:8000/api/v1/contact`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Success:", response.data);
      setIsSubmitted(true);
      reset();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Handle Axios error
        console.error("Error:", error.response?.data || error.message);
      } else {
        // Handle non-Axios error
        console.error("Unexpected Error:", error);
      }
    }
  };

  // const headingText = "ENGAGE WITH YOUR COLLEGE SOCIETY MANAGEMENT PORTAL";
  // const paragraphText =
  //   "Your feedback and questions are important to us - drop us a line! CONNECT AND THRIVE";

  return (
    <>
      {/* <div className="relative mt-0 mx-auto w-full">
        <img
          className="w-full h-80 blur-sm"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Member spotlight intro"
        />
        <div className="absolute inset-0 py-20 lg:py-28 flex flex-col items-center text-center">
          
          <h2 className="text-white text-center text-4xl font-bold mb-4">
            <TypewriterText text={headingText} speed={100} />
          </h2>

          <p className="text-black font-bold text-center my-5 text-2xl">
            <TypewriterText text={paragraphText} speed={100} />
          </p>
        </div>
      </div> */}

      <div className="h-full w-full flex items-center justify-center flex-col bg-gray-100 py-10 sm:py-20 px-4">
        {isSubmitted ? (
          <div className="bg-green-100 p-6 rounded-lg shadow-lg w-full max-w-screen-md flex flex-col items-center gap-y-4">
            <h2 className="text-3xl font-bold text-center text-green-800">
              Thank you!
            </h2>
            <p className="text-center text-green-700 mb-4">
              Your enquiry has been submitted. We will get back to you soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md flex flex-col gap-y-4"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Contact Form
            </h2>
            <p className="text-center text-gray-900 mb-4">
              Fill out the form below, and we will get back to you as soon as
              possible.
            </p>

            <div className="flex flex-col sm:flex-row mb-2">
              <label
                className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right"
                type="text"
                id="name"
                {...register("Name")}
                placeholder="Enter your Name"
              />
            </div>
            {errors.Name && (
              <span className="text-red-500">{errors.Name.message}</span>
            )}

            <div className="flex flex-col sm:flex-row mb-2">
              <label
                className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right"
                type="email"
                id="email"
                {...register("Email")}
                placeholder="Enter your Email-id"
              />
            </div>
            {errors.Email && (
              <span className="text-red-500">{errors.Email.message}</span>
            )}

            <div className="flex flex-col sm:flex-row mb-2">
              <label
                className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
                htmlFor="contact"
              >
                Contact No.
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right"
                type="text"
                id="contact"
                {...register("ContactNo")}
                placeholder="Enter your Contact No."
              />
            </div>
            {errors.ContactNo && (
              <span className="text-red-500">{errors.ContactNo.message}</span>
            )}

            <div className="flex flex-col sm:flex-row mb-2">
              <label
                className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
                htmlFor="StudentBatch"
              >
                Batch
              </label>
              <select aria-label="Batch selection" {...register("Batch")} className={`${classes}`}>
                {Batch.map((batch, index) => (
                  <option value={batch} key={index}>
                    {batch}
                  </option>
                ))}
              </select>
            </div>
            {errors.Batch && (
              <span className="text-red-500">{errors.Batch.message}</span>
            )}

            <div className="flex flex-col sm:flex-row mb-2">
              <label
                className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
                htmlFor="Branch"
              >
                Branch
              </label>
              <select aria-label="Branch selection" {...register("Branch")} className={`${classes}`}>
                {Branch.map((branch, index) => (
                  <option value={branch} key={index}>
                    {branch}
                  </option>
                ))}
              </select>
            </div>
            {errors.Branch && (
              <span className="text-red-500">{errors.Branch.message}</span>
            )}

            <div className="flex flex-col sm:flex-row mb-2">
              <label
                className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
                htmlFor="StudentSociety"
              >
                Enter your Society
              </label>
              <select aria-label="Society selection" {...register("Society")} className={`${classes}`}>
                {society.map((soc, index) => (
                  <option value={soc} key={index}>
                    {soc}
                  </option>
                ))}
              </select>
            </div>
            {errors.Society && (
              <span className="text-red-500">{errors.Society.message}</span>
            )}

            <div className="flex flex-col sm:flex-row mb-2">
              <label
                className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right"
                type="text"
                id="subject"
                {...register("Subject")}
                placeholder="Enter the Subject"
              />
            </div>
            {errors.Subject && (
              <span className="text-red-500">{errors.Subject.message}</span>
            )}

            <div className="flex flex-col sm:flex-row mb-2">
              <label
                className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right"
                id="message"
                {...register("Message")}
                placeholder="Enter your message"
              />
            </div>
            {errors.Message && (
              <span className="text-red-500">{errors.Message.message}</span>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg font-bold mt-4 transform transition-transform duration-200 ease-out hover:scale-105"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default ContactUs;
