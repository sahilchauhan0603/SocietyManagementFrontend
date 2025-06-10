// import { Card, CardContent } from "@/components/ui/card";
// import axios from "axios";
// import { format } from "date-fns";
// import { useEffect, useState } from "react";

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// const AllNews = () => {
//   const [news, setNews] = useState([])
//   useEffect(() => {
//     const fetchsociety = async () => {
//       const res = await axios.get(`${BACKEND_URL}/news`)
//       console.log('data', res.data)
//       setNews(res.data)
//     }
//     fetchsociety()
//   }, [])
//   if (!news) return <div>Loading...</div>;


//   return (
//     <div className="container space-y-3">
//       <div className="relative mx-auto w-full">
//         <img
//           className="w-full h-80 blur-sm"
//           src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//           alt="Member spotlight intro"
//         />
//         <div className="absolute inset-0 py-20 lg:py-28">
//         <h2 className="text-black text-center text-4xl font-extrabold capitalize">
//           Stay Informed: The Latest Updates from College Societies!
//         </h2>
//         <p className="text-white text-center my-5 text-xl font-extrabold">
//           Stay in the loop with the buzzworthy events and exciting activities from our vibrant college societies !
//         </p>
//         </div>
//       </div>
//       <h2 className="text-3xl lg:text-5xl font-bold text-center pb-10">
//         ALL NEWS
//       </h2>
//       <div className="flex flex-col gap-y-4">
//         {news.map(({ Title, Description, DateOfNews, SocietyName }, index) => (
//           <Card
//             key={index}
//             className="hover:border-gray-900 border-md hover:transition-all hover:scale-105 hover:duration-1000 border-2 border-black border-opacity-50"
//           >
//             <CardContent className="pt-5 gap-10">
//               <div>
//                 <h2 className="font-bold text-xl text-center">{Title}</h2>
//                 <p className="text-muted-foreground text-center pt-3">
//                   by {SocietyName}
//                 </p>
//               </div>
//               <div className="mt-4">
//                 <p>{Description}</p>
//               </div>
//               <p className="opacity-70 text-center my-4">
//                 Published on {format(new Date(DateOfNews), "MMMM dd, yyyy")}
//               </p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );  
// };

// export default AllNews;



import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AllNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchSociety = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/news`);
        setNews(res.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchSociety();
  }, []);

  if (!news) return <div>Loading...</div>;

  return (
    <div className="container mx-auto space-y-10 px-4 lg:px-8">
      {/* Header Section */}
      <div className="relative mx-auto w-full">
        <img
          className="w-full h-80 object-cover"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Member spotlight intro"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            Stay Informed: The Latest Updates from College Societies!
          </h2>
          <p className="text-lg lg:text-xl mt-4 max-w-2xl">
            Stay in the loop with the buzzworthy events and exciting activities
            from our vibrant college societies!
          </p>
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-3xl lg:text-5xl font-bold text-center">
        All News
      </h2>

      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map(({ Title, Description, DateOfNews, SocietyName }, index) => (
          <Card
            key={index}
            className="border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <CardContent className="p-6">
              <div>
                <h3 className="font-bold text-xl text-center text-blue-600">
                  {Title}
                </h3>
                <p className="text-gray-500 text-center mt-2">by {SocietyName}</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">{Description}</p>
              </div>
              <p className="text-sm text-gray-400 text-center mt-6">
                Published on {format(new Date(DateOfNews), "MMMM dd, yyyy")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
