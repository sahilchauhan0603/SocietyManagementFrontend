import { BookCopy, Filter } from "lucide-react";
import News_Table from "../Page_Components/News/News_Table";
import Sidebar from "../Page_Components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Header from "../Page_Components/Sidebar/Header";
const Admin_News = () => {
  return (
    <div className="h-screen  w-full relative">
      <Header />
      <div className="flex gap-3 absolute w-full ">
        <Sidebar />
        <div className=" flex flex-col p-1 md:p-6 items-center mt-10  relative">
          <div className="w-10/12 flex justify-between items-center p-2">
            <Link
              to="/admin/news/add"
              className="px-3 flex gap-6 py-1 bg-blue-700 text-white border-2 items-center rounded-lg"
            >
              <BookCopy size={20} color="white" />
              <h1 className="text-xl">Add News Form</h1>
            </Link>
            <Filter />
          </div>

          <News_Table />
        </div>
      </div>
    </div>
  );
};

export default Admin_News;
