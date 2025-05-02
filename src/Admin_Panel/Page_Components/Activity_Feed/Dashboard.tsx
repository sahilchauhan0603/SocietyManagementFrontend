// import { formatDistanceToNow } from 'date-fns'
// import {   Newspaper} from 'lucide-react'
// import Sidebar from '../Sidebar/Sidebar'
// import { Link } from 'react-router-dom'
// import { useState, useEffect } from "react";
// import axios from "axios";

// type newsType = {
//     NewsID: number,
//     Title: string,
//     DateOfNews: Date,
//     Author: string
//   }

//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


// const Dashboard = () => {
//     const [news, setNews] = useState<newsType[]>([]);
//     const [ members , setMembers ] = useState<number>(0)
//     const [ events , setEvents ] = useState<number>(0)

//     useEffect(() => {
//         const fetchAllNews = async () => {
//           let res; let res1; let res2;
//            res = await axios.get(`${BACKEND_URL}/admin/home/news`);
//           console.log('in admin home page',res)
//           setNews(res.data);

//           res1 = await axios.get(`${BACKEND_URL}/students`);
//           console.log('in admin home page',res1)
//           setMembers(res1.data.length);

//           res2 = await axios.get(`${BACKEND_URL}/events`);
//           console.log('in admin home page',res2)
//           setEvents(res2.data.length);

//         };
    
//         fetchAllNews();
//       }, []);
    
//       if (news.length <= 0) {
//         return <div className="text-xl font-bold">Loading data...</div>;
//       }
//     return (
//         <div className='md:flex md:gap-3 w-screen overflow-x-hidden'>
//               <Sidebar/>
//         <div className='w-screen overflow-x-hidden'>
//             <div className="flex flex-col lg:flex-row lg:justify-around mt-10 lg:space-x-4  space-y-4 text-center mx-2">
//                 {/* {
//                     statsData.map((dataField, index) => (
//                         <div key={index} className="bg-gray-200 px-2 lg:px-4 py-8 rounded-lg">
//                             <h3 className="text-4xl font-bold text-black">{dataField.count}</h3>
//                             <h5 className="text-gray-700">{dataField.field}</h5>
//                         </div>
//                     ))
//                 } */}

//                         <div  className="bg-gray-200 px-2 lg:px-4 py-8 rounded-lg">
//                             <h3 className="text-2xl font-bold text-black">Total Registered Socities</h3>
//                             <h5 className="text-gray-700 text-2xl">16</h5>
//                         </div>
//                         <div  className="bg-gray-200 px-2 lg:px-4 py-8 rounded-lg">
//                             <h3 className="text-2xl font-bold text-black">Total Registered Members</h3>
//                             <h5 className="text-gray-700 text-2xl">{members}</h5>
//                         </div>
//                         <div  className="bg-gray-200 px-2 lg:px-4 py-8 rounded-lg">
//                             <h3 className="text-2xl font-bold text-black">Total Events Till Date</h3>
//                             <h5 className="text-gray-700 text-2xl">{events}</h5>
//                         </div>

//             </div>

//             <div className="flex flex-col lg:flex-row lg:justify-around mt-10 lg:space-x-4  space-y-4 mx-2 lg:mx-0">
//                 <div className=''>
//                     <h2 className='font-bold text-2xl mb-8 text-center'>Activity Feed</h2>
//                     <div className='border border-md brder-gray-800 rounded px-4 py-2 '>
//                         {
//                             news.map((activity, index) => (
//                                 <div key={index} className='flex flex-col lg:flex-row space-x-4 mb-6'>
//                                     <div>
//                                         {/* <img
//                                             src={activity.img}
//                                             className='rounded-full h-20'
//                                         /> */}
//                                         <Newspaper  className='rounded-full h-20'/>
//                                     </div>
//                                     <div>
//                                         <div className='flex flex-col pt-4'>
//                                             <h5 className='text-gray-700 text-sm'>{formatDistanceToNow(activity.DateOfNews)} ago / {activity.Author}</h5>
//                                             <div className='flex justify-between'>
//                                                 <h3>{activity.Title}</h3>
//                                                 {/* <ChevronRight className='ml-6' /> */}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                         <Link to="/all-news" className='text-blue-600'>See more activities</Link>
//                         {/* <p className='text-blue-600'>See more activities</p> */}
//                     </div>
//                 </div>
//                 {/* <div>
//                     <h2 className='font-bold text-2xl mb-8 text-center'>Query Resolution</h2>
//                     <PieChart />
//                 </div> */}
//             </div>
//         </div>
//         </div>
//     )
// }

// export default Dashboard

import { formatDistanceToNow } from 'date-fns'
import { Newspaper, Users, Calendar, Home, Activity, ChevronRight } from 'lucide-react'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";

type newsType = {
  NewsID: number,
  Title: string,
  DateOfNews: Date,
  Author: string
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Dashboard = () => {
  const [news, setNews] = useState<newsType[]>([]);
  const [members, setMembers] = useState<number>(0);
  const [events, setEvents] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        setLoading(true);
        const [newsRes, studentsRes, eventsRes] = await Promise.all([
          axios.get(`${BACKEND_URL}/admin/home/news`),
          axios.get(`${BACKEND_URL}/students`),
          axios.get(`${BACKEND_URL}/events`)
        ]);

        setNews(newsRes.data);
        setMembers(studentsRes.data.length);
        setEvents(eventsRes.data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-xl font-bold flex items-center gap-2">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            Loading dashboard data...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 p-6 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your community.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Society Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Registered Societies</h3>
              <Home className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-3xl font-bold mb-2">16</div>
            <div className="mt-4">
              <p className="text-xs text-gray-500">+2 from last month</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Members Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Registered Members</h3>
              <Users className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold mb-2">{members}</div>
            <div className="mt-4">
              <p className="text-xs text-gray-500">+12% from last month</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>

          {/* Events Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Events</h3>
              <Calendar className="h-5 w-5 text-purple-500" />
            </div>
            <div className="text-3xl font-bold mb-2">{events}</div>
            <div className="mt-4">
              <p className="text-xs text-gray-500">+5 upcoming events</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Activities</h2>
              <Activity className="h-6 w-6 text-blue-500" />
            </div>
            <div className="space-y-6">
              {news.slice(0, 4).map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Newspaper className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{activity.Title}</h4>
                      <span className="text-xs text-gray-500">
                        {formatDistanceToNow(activity.DateOfNews)} ago
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Posted by {activity.Author}</p>
                  </div>
                </div>
              ))}
              <div className="text-center pt-2">
                <Link 
                  to="/all-news" 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                >
                  View all activities
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Quick Actions</h2>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/events" 
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center"
              >
                <Calendar className="h-8 w-8 text-purple-500 mb-2" />
                <span className="text-sm font-medium">Manage Events</span>
              </Link>
              <Link 
                to="/members" 
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center"
              >
                <Users className="h-8 w-8 text-green-500 mb-2" />
                <span className="text-sm font-medium">View Members</span>
              </Link>
              <Link 
                to="/news" 
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center"
              >
                <Newspaper className="h-8 w-8 text-blue-500 mb-2" />
                <span className="text-sm font-medium">Post News</span>
              </Link>
              <Link 
                to="/societies" 
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center"
              >
                <Home className="h-8 w-8 text-orange-500 mb-2" />
                <span className="text-sm font-medium">Societies</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard