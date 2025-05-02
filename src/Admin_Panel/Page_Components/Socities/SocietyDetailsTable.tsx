// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableRow,
//   TableHeader,
//   TableHead,
// } from "@/components/ui/table";
// // import { zodResolver } from "@hookform/resolvers/zod";
// import { useEffect, useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { z } from "zod";
// import { Trash, Edit } from "lucide-react";
// import { Link, useParams } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { format } from "date-fns";

// type societyType = {
//   SocietyID: number,
//   SocietyName: number,
//   DateOfRegistration:Date,
//   SocietyDescription: string,
//   SocietyHead: string,
//   SocietyType: string
// }
// const tableClass = "text-center text-xl border-x";
// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// const SocietyDetailsTable = () => {
//   let [societyData, setSocietyData] = useState([]);
//   const params = useParams()
//   console.log(params)

//   let fetchAllSociety;
//   useEffect(() => {
//     fetchAllSociety = async () => {
//       let res;
//       if (params.societyID) {
//         res = await axios.get(`${BACKEND_URL}/admin/societies/${params.societyID}`)
//       } else {
//         res = await axios.get(`${BACKEND_URL}/admin/societies`)
//       }
//       console.log('data', res.data)
//       setSocietyData(res.data)
//     }
//     fetchAllSociety()
//   }, [])

//   if (societyData.length <= 0) {
//     return (
//       <div className="text-3xl font-bold">Loading data</div>
//     )
//   }

//   const handleDelete = async (societyID: number) => {

//     await axios.delete(`${BACKEND_URL}/societies/${societyID}`).then(
//       res => {
//         console.log(res)
//         setSocietyData(societyData.filter((society: societyType) => society.SocietyID !== societyID))
//       }
//     ).catch(
//       err => {
//         console.log(err)
//       }
//     )
//   }
  
//   return (
//     <div className="mt-10 w-screen overflow-x-hidden">
      
//       <div className="overflow-auto h-96 mt-10 w-9/12">
//         <Table className="border-t border-x w-full shadow-lg table-auto ">
//           <TableHeader>
//             <TableRow>
//               <TableHead rowSpan={2} className={tableClass}>
//                 SocietyID
//               </TableHead>
//               <TableHead rowSpan={2} className={tableClass}>
//                 Name of Society
//               </TableHead>
//               <TableHead colSpan={4} className={tableClass}>
//                 Society Details
//               </TableHead>
//               <TableHead rowSpan={2} className={tableClass}>
//                 Action
//               </TableHead>
//             </TableRow>
//             <TableRow>
//               <TableHead className={tableClass}>
//                 Date Of Establishment
//               </TableHead>
//               <TableHead className={tableClass}>Description</TableHead>
//               <TableHead className={tableClass}>Society Head</TableHead>
//               {/* <TableHead className={tableClass}> Coordinators</TableHead> */}
//               {/* <TableHead className={tableClass}>Number Of Members</TableHead> */}
//               <TableHead className={tableClass}> Society Type</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {societyData.map((society:societyType, index: number) => (
//               <TableRow key={index}>
//                 <TableCell className="text-center border-x ">
//                   {index + 1}.
//                 </TableCell>
//                 <TableCell className="text-center border-x text-md ">
//                   {society.SocietyName}
//                 </TableCell>
//                 <TableCell className="text-center border-x text-md ">
//                 {format(new Date(society.DateOfRegistration), "MMMM dd, yyyy")}
//                 </TableCell>
//                 <TableCell className="text-center border-x text-md ">
//                   {society.SocietyDescription}
//                 </TableCell>
//                 <TableCell className="text-center border-x text-md">
//                   {society.SocietyHead}
//                 </TableCell>
//                 {/* <TableCell className="text-center border-x text-md text-gray-800">
//                   {details.Coordinators}
//                 </TableCell> */}
//                 {/* <TableCell className="text-center border-x text-md text-gray-800">
//                   {details.NumberOfMembers}
//                 </TableCell> */}
//                 <TableCell className="text-center border-x text-md ">
//                   {society.SocietyType}
//                 </TableCell>
//                 <TableCell className="flex justify-center gap-5">
//                   <Link to={`/admin/society/update/${society.SocietyID}`} state={{society}}>
//                     <Button className="text-blue-700">
//                       <Edit />
//                     </Button>
//                   </Link>
//                   <Button className="text-red-700" onClick={() => handleDelete(society.SocietyID)}>
//                     <Trash />
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default SocietyDetailsTable;


import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Trash2, Edit, PlusCircle, Search, Calendar, User, Filter, ChevronDown } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

type societyType = {
  SocietyID: number;
  SocietyName: string;
  DateOfRegistration: Date;
  SocietyDescription: string;
  SocietyHead: string;
  SocietyType: string;
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const SocietyDetailsTable = () => {
  const [societyData, setSocietyData] = useState<societyType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("All");
  const params = useParams();

  const societyTypes = ["All", "Tech", "Non-Tech", "Cultural", "Sports"];

  useEffect(() => {
    const fetchAllSociety = async () => {
      try {
        setLoading(true);
        let res;
        if (params.societyID) {
          res = await axios.get(`${BACKEND_URL}/admin/societies/${params.societyID}`);
        } else {
          res = await axios.get(`${BACKEND_URL}/admin/societies`);
        }
        setSocietyData(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllSociety();
  }, [params.societyID]);

  const handleDelete = async (societyID: number) => {
    if (window.confirm("Are you sure you want to delete this society?")) {
      try {
        await axios.delete(`${BACKEND_URL}/societies/${societyID}`);
        setSocietyData(societyData.filter((society) => society.SocietyID !== societyID));
      } catch (err) {
        console.error('Error deleting society:', err);
      }
    }
  };

  const filteredSocieties = societyData.filter((society) => {
    const matchesSearch = society.SocietyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      society.SocietyHead.toLowerCase().includes(searchTerm.toLowerCase()) ||
      society.SocietyDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === "All" || society.SocietyType === filterType;
    
    return matchesSearch && matchesType;
  });

  if (loading) {
    return (
      <div className="p-8 space-y-4">
        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-40" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Societies Management</h1>
          <p className="text-gray-600">View and manage all registered societies</p>
        </div>
        <Link to="/admin/society/add">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Society
          </Button>
        </Link>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search societies..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              {filterType}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {societyTypes.map((type) => (
              <DropdownMenuItem key={type} onSelect={() => setFilterType(type)}>
                {type}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Societies Table */}
      <div className="rounded-lg border shadow-sm overflow-hidden">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Society Name</TableHead>
              <TableHead className="hidden md:table-cell">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Established
                </div>
              </TableHead>
              <TableHead className="hidden lg:table-cell">Description</TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Head
                </div>
              </TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSocieties.length > 0 ? (
              filteredSocieties.map((society, index) => (
                <TableRow key={society.SocietyID} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <div className="font-medium text-gray-900">{society.SocietyName}</div>
                    <div className="md:hidden text-sm text-gray-500">
                      {format(new Date(society.DateOfRegistration), "MMM dd, yyyy")}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {format(new Date(society.DateOfRegistration), "MMMM dd, yyyy")}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-gray-600 max-w-xs truncate">
                    {society.SocietyDescription}
                  </TableCell>
                  <TableCell>{society.SocietyHead}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        society.SocietyType === "Tech" ? "default" :
                        society.SocietyType === "Non-Tech" ? "secondary" :
                        society.SocietyType === "Cultural" ? "outline" : "destructive"
                      }
                    >
                      {society.SocietyType}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link to={`/admin/society/update/${society.SocietyID}`} state={{ society }}>
                        <Button variant="outline" size="sm" className="text-blue-600 hover:text-blue-800">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(society.SocietyID)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <Search className="h-12 w-12 text-gray-400" />
                    <h3 className="text-lg font-medium text-gray-900">No societies found</h3>
                    <p className="text-gray-500">
                      {searchTerm || filterType !== "All" 
                        ? "Try adjusting your search or filter criteria" 
                        : "No societies have been registered yet"}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination would go here */}
      {filteredSocieties.length > 0 && (
        <div className="flex items-center justify-end space-x-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default SocietyDetailsTable;