import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const schema = z.object({
  EnrollmentNo: z
    .string()
    .length(11, "Enrollment number must be a positive integer"),
  FirstName: z.string().nonempty("First name is required"),
  LastName: z.string().nonempty("Last name is required"),
  Branch: z.string().nonempty("Branch is required"),
  BatchYear: z.string().nonempty("Batch year must be a positive integer"),
  MobileNo: z.string().nonempty("Mobile number is required"),
  Email: z.string().nonempty("Invalid email address"),
  ProfilePicture: z.string().url("Invalid URL for profile picture"),
  Society: z.string().nonempty("Society is required"),
  SocietyPosition: z.string().nonempty("Society position is required"),
  DomainExpertise: z.string().nonempty("Domain expertise is required"),
  GithubProfile: z.string().url().optional(),
  LinkedInProfile: z.string().url().optional(),
  TwitterProfile: z.string().url().optional(),
});

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

const branches = ["CSE", "IT", "CSE-DS", "ECE", "EEE"];

const batches = [
  "2020-2024",
  "2021-2025",
  "2022-2026",
  "2023-2027",
  "2024-2028",
  "2025-2029",
];

const classes =
  "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";

const societyOptions = [
  { id: 1, name: "Namespace" },
  { id: 2, name: "Anveshan" },
  { id: 3, name: "Hash Define" },
  { id: 4, name: "WIBD" },
  { id: 5, name: "GDSC" },
  { id: 6, name: "WIE" },
  { id: 7, name: "IEEE" },
  { id: 8, name: "Electonauts" },
  { id: 9, name: "Dhrishti" },
  { id: 10, name: "Opti Click" },
  { id: 11, name: "Avaran" },
  { id: 12, name: "Octave" },
  { id: 13, name: "Panache" },
  { id: 14, name: "Mavericks" },
  { id: 15, name: "Kalam" },
  { id: 16, name: "Chromavita" },
];

const societyPositions = [
  { id: 1, name: "President" },
  { id: 2, name: "Vice President" },
  { id: 3, name: "Tech Team Member" },
  { id: 4, name: "Core Team Member" },
  { id: 5, name: "Junior Council Member" },
  { id: 6, name: "Senior Council Member" },
];

const Become_Member_Form: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  type formData = z.infer<typeof schema>;

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
      // Find the selected society by its ID
      const selectedSociety = societyOptions.find(
        (society) => society.id.toString() === data.Society
      );
      if (!selectedSociety) {
        throw new Error("Invalid society selected");
      }

      // Prepare the submission data, converting StudentEnrollmentNumber to integer
      const submissionData = {
        ...data,
        EnrollmentNo: parseInt(data.EnrollmentNo, 10), // Convert to integer
        Society: selectedSociety.name, // Send the society name
      };

      const response = await axios.post(
        `${BACKEND_URL}/becomeMember`,
        submissionData,
        {
          // const response = await axios.post(`http://localhost:8000/api/v1/becomeMember`, submissionData, {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Success:", response.data);
      setIsSubmitted(true);
      reset();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };

  const headingText = "WANT TO BECOME A MEMBER OF THE SOCIETY OF YOUR CHOICE ?";
  const paragraphText1 =
    "Fill the form and the Society will get back to you !!";
  const paragraphText2 = "CONNECT AND THRIVE....";

  return (
    <>
      <div className="">
        {/* Typing effect for the heading */}
        <h2 className="text-white text-center text-4xl font-bold mb-4">
          {headingText}
        </h2>

        {/* Typing effect for the paragraph */}
        <p className="text-black font-extrabold text-center my-5 text-2xl">
          {paragraphText1}
        </p>
        <p className="text-black font-extrabold text-center my-5 text-2xl">
          {paragraphText2}
        </p>
      </div>

      <div className="py-8 px-6 lg:px-20 bg-gray-200 mt-10 w-full  md:w-7/12 mx-auto text-black">
        <h2 className="font-bold text-center text-4xl mb-4 text-gray-800">
          Become a Member
        </h2>

        {isSubmitted ? (
          <div className="bg-green-100 p-6 rounded-lg shadow-lg w-full max-w-screen-md flex flex-col items-center gap-y-4">
            <h2 className="text-3xl font-bold text-center text-green-800">
              Thank you!
            </h2>
            <p className="text-center text-green-700 mb-4">
              Your Joining Request has been submitted. The Requested Society
              will get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label>First Name:</label>
              <input
                {...register("FirstName", { required: true })}
                type="text"
                className="border p-2 w-full"
              />
              {errors.FirstName && (
                <p className="text-red-600">First Name is required.</p>
              )}
            </div>

            <div>
              <label>Last Name:</label>
              <input
                {...register("LastName", { required: true })}
                type="text"
                className="border p-2 w-full"
              />
              {errors.LastName && (
                <p className="text-red-600">Last Name is required.</p>
              )}
            </div>

            <div>
              <label>Enrollment No:</label>
              <input
                {...register("EnrollmentNo", { required: true })}
                type="number"
                className="border p-2 w-full"
              />
              {errors.EnrollmentNo && (
                <p className="text-red-600">Enrollment No is required.</p>
              )}
            </div>

            <div>
              <label>Branch:</label>
              <select {...register("Branch")} className={`${classes}`}>
                <option value="">Select your Branch</option>
                {branches.map((batch, index) => (
                  <option value={batch} key={index}>
                    {batch}
                  </option>
                ))}
              </select>
              {errors.Branch && (
                <p className="text-red-600">Branch is required.</p>
              )}
            </div>

            <div>
              <label>Batch Year:</label>
              <select {...register("BatchYear")} className={`${classes}`}>
                <option value="">Select your Batch</option>
                {batches.map((batch, index) => (
                  <option value={batch} key={index}>
                    {batch}
                  </option>
                ))}
              </select>
              {errors.BatchYear && (
                <p className="text-red-600">Batch Year is required.</p>
              )}
            </div>

            <div>
              <label>Mobile No:</label>
              <input
                {...register("MobileNo", { required: true })}
                type="text"
                className="border p-2 w-full"
              />
              {errors.MobileNo && (
                <p className="text-red-600">Mobile No is required.</p>
              )}
            </div>

            <div>
              <label>Email:</label>
              <input
                {...register("Email", { required: true })}
                type="email"
                className="border p-2 w-full"
              />
              {errors.Email && (
                <p className="text-red-600">Email is required.</p>
              )}
            </div>

            <div>
              <label>Profile Picture:</label>
              <input
                {...register("ProfilePicture")}
                type="text"
                className="border p-2 w-full"
              />
            </div>

            <div>
              <label>Society:</label>
              <select
                {...register("Society", { required: true })}
                className="border p-2 w-full"
              >
                <option value="">Select a Society</option>
                {societyOptions.map((society) => (
                  <option key={society.id} value={society.id}>
                    {society.name}
                  </option>
                ))}
              </select>
              {errors.Society && (
                <p className="text-red-600">Society is required.</p>
              )}
            </div>

            <div>
              <label>Position:</label>
              <select
                {...register("SocietyPosition", { required: true })}
                className="border p-2 w-full"
              >
                <option value="">Select Position</option>
                {societyPositions.map((society) => (
                  <option key={society.id} value={society.id}>
                    {society.name}
                  </option>
                ))}
              </select>
              {errors.SocietyPosition && (
                <p className="text-red-600">Society is required.</p>
              )}
            </div>

            <div>
              <label>Domain Expertise:</label>
              <textarea
                {...register("DomainExpertise")}
                className="border p-2 w-full"
              />
            </div>

            <div>
              <label>Github Profile:</label>
              <input
                {...register("GithubProfile")}
                type="url"
                className="border p-2 w-full"
              />
            </div>

            <div>
              <label>LinkedIn Profile:</label>
              <input
                {...register("LinkedInProfile")}
                type="url"
                className="border p-2 w-full"
              />
            </div>

            <div>
              <label>Twitter Profile:</label>
              <input
                {...register("TwitterProfile")}
                type="url"
                className="border p-2 w-full"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded transform transition-transform duration-200 ease-out hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Become_Member_Form;
