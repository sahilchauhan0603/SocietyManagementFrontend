import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Activity_Feed from "./Admin_Panel/Page/Activity_Feed";
import Admin_Setting from "./Admin_Panel/Page_Components/Settings/Settings";
import Admin_Coordinators from "./Admin_Panel/Page/Coordinators";
import Admin_Members from "./Admin_Panel/Page/Members";
import Admin_News from "./Admin_Panel/Page/News";
import Admin_Queries from "./Admin_Panel/Page/Queries";
import Admin_Society from "./Admin_Panel/Page/SocietyActivity";
import FeedbackButton from "./components/Common-Components/FeedbackButton";
import FeedbackForm from "./components/Common-Components/FeedbackForm";
import Footer from "./components/Common-Components/Footer";
import Secondary_navbar from "./components/Common-Components/Secondary_navbar";
import Navbar from "./components/navbar";
import AboutUs from "./components/Page-Components/AboutUs";
import AllNews from "./components/Page-Components/AllNews";
import CreateEventForm from "./components/Page-Components/CreateEventForm";
import Events from "./components/Page-Components/Events/Events";
import News from "./components/Page-Components/News";
import SocietMembers from "./components/Page-Components/SocietMembers";
import SocietyQueryForm from "./components/Page-Components/SocietyQueryForm";
import Vision from "./components/Page-Components/Vision";
import ScrollToTop from "./components/ScrollToTop";
import AllGallery from "./pages/AllGallery";
import Allsocities from "./pages/Allsociety/Allsocities";
import Become_Member_Form from "./pages/Become_Member_Form";
import ChangePassword from "./pages/ChangePassword";
import ContactUs from "./pages/ContactUs";
import Coordinators from "./pages/Coordinators";
import Evaluation from "./pages/Evaluation";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Openings from "./pages/Openings";
import OTP from "./pages/OTP";
import ResetPasswordPage from "./pages/ResetPassword";
import Roles from "./pages/Roles";
import SignupPage from "./pages/SignUp";
import Society from "./pages/Society";
import SocietyMembers from "./pages/Society_Members";
import SocietyForm from "./pages/SocietyForm";
import SocietyGallery from "./pages/SocietyGallery";
import Societyjoiningform from "./pages/Societyjoiningform";
import Societyjoiningrequst from "./pages/Societyjoiningrequst";
import StudentLogin from "./pages/StudentLogin";
import Testimonials from "./pages/Testimonials";
import ViewPhoto from "./pages/ViewPhoto";
import AddCoordinator from "./Admin_Panel/Page_Components/Coordinators/AddCoordinator"; 
import UpdateCoordinator from "./Admin_Panel/Page_Components/Coordinators/UpdateCoordinator"; 
import AddMembers from "./Admin_Panel/Page_Components/Members/AddMembers";
import AddNews from "./Admin_Panel/Page_Components/News/AddNews";
import CreateTestimonial from "./components/Page-Components/CreateTestimonial";
import Admin_Events from "./Admin_Panel/Page/Events";
import AddEvents from "./Admin_Panel/Page_Components/Events/AddEvents";
import Achievements from "./pages/Achievements";
import UpdateEvents from "./Admin_Panel/Page_Components/Events/UpdateEvents";
import UpdateSociety from "./Admin_Panel/Page_Components/Socities/UpdateSociety";

import UpdateMembers from "./Admin_Panel/Page_Components/Members/UpdateMembers";
import UpdateNews from "./Admin_Panel/Page_Components/News/UpdateNews";

import Admin_Testimonials from './Admin_Panel/Page/Testimonials'
import AddTestimonial from "./Admin_Panel/Page_Components/Testimonials/AddTestimonial";
import UpdateTestimonial from "./Admin_Panel/Page_Components/Testimonials/UpdateTestimonial";

import Admin_Achievements from './Admin_Panel/Page/Achievemnts';
import AddAchievements from "./Admin_Panel/Page_Components/SocietyAchievements/AddAchievements";
import UpdateAchievements from "./Admin_Panel/Page_Components/SocietyAchievements/UpdateAchievements";

import Admin_Gallery from './Admin_Panel/Page/Gallery';
import AddGallery from "./Admin_Panel/Page_Components/Gallery/AddGallery";
import UpdateGallery from "./Admin_Panel/Page_Components/Gallery/UpdateGallery";

import Admin_Roles from './Admin_Panel/Page/Roles'
import AddRoles from './Admin_Panel/Page_Components/Roles/AddRoles'
import UpdateRoles from './Admin_Panel/Page_Components/Roles/UpdateRoles'

import Admin_Login from "./Admin_Panel/Page/Admin_Login";
import ScrollTop from "./scrollUp";
import ProgressBar from "./loadBar";
import HelpCenter from "./Admin_Panel/Page_Components/Sidebar/HelpCenter";
import SettingsPage from "./Admin_Panel/Page_Components/Sidebar/SettingsPage";
import ContactMessagesPage from "./Admin_Panel/Page_Components/Sidebar/ContactMessagesPage";
// import ProtectedRoute from "./protectedRoute";

const App = () => {
  const location = useLocation();
  console.log(location);
  const Locations = location.pathname.split("/");
  console.log(Locations);

  if (Locations[1].toLowerCase() === "admin") {
    return (
    <>
      <ScrollTop />
      <ProgressBar />
      <Routes>
        <Route path="/admin" element={<Admin_Login />} />
        <Route path="/admin/news" element={<Admin_News />} />
        <Route path="/admin/news/:societyID" element={<Admin_News />} />
        <Route path="/admin/news/add" element={<AddNews/>} />
        <Route path="/admin/news/update/:newsID" element={<UpdateNews/>} />
        <Route path="/admin/events" element={<Admin_Events />} />
        <Route path="/admin/events/:societyID" element={<Admin_Events />} />
        <Route path="/admin/events/add" element={<AddEvents/>} />
        <Route path="/admin/events/update/:eventsID" element={<UpdateEvents/>} />
        <Route path="/admin/members" element={<Admin_Members />} />
        <Route path="/admin/members/:societyID" element={<Admin_Members />} />
        <Route path="/admin/members/add" element={<AddMembers />} />
        <Route path="/admin/members/update/:memberid" element={<UpdateMembers />} />
        <Route path="/admin/queries" element={<Admin_Queries />} />
        <Route path="/admin/coordinators" element={<Admin_Coordinators />} />
        <Route path="/admin/coordinators/:societyID" element={<Admin_Coordinators />} />
        <Route path="/admin/coordinators/add" element={<AddCoordinator />} />
        <Route path="/admin/coordinators/update/:coordinatorID" element={<UpdateCoordinator />} />
        <Route path="/admin/setting" element={<Admin_Setting />} />
        <Route path="/admin/society" element={<Admin_Society />} />
        <Route path="/admin/society/:societyID" element={<Admin_Society />} />
        <Route path="/admin/society/update/:societyId" element={<UpdateSociety/>}/>
        <Route path="/admin/settings" element={<SettingsPage />} />
        <Route path="/admin/contact" element={<ContactMessagesPage />} />

        <Route path="/admin/testimonials" element={<Admin_Testimonials />} />
        <Route path="/admin/testimonials/:societyID" element={<Admin_Testimonials />} />
        <Route path="/admin/testimonials/add" element={<AddTestimonial />} />
        <Route path="/admin/testimonials/update/:testimonialID" element={<UpdateTestimonial />} />

        <Route path="/admin/societyAchievements" element={<Admin_Achievements />} />
        <Route path="/admin/societyAchievements/:societyID" element={<Admin_Achievements />} />
        <Route path="/admin/societyAchievements/add" element={<AddAchievements />} />
        <Route path="/admin/societyAchievements/update/:achievementID" element={<UpdateAchievements />} />

        <Route path="/admin/gallery" element={<Admin_Gallery />} />
        <Route path="/admin/gallery/:societyID" element={<Admin_Gallery />} />
        <Route path="/admin/gallery/add" element={<AddGallery />} />
        <Route path="/admin/gallery/update/:galleryid" element={<UpdateGallery />} />

        <Route path="/admin/roles" element={<Admin_Roles />} />
        <Route path="/admin/roles/:societyID" element={<Admin_Roles />} />
        <Route path="/admin/roles/add" element={<AddRoles />} />
        <Route path="/admin/roles/update/:roleid" element={<UpdateRoles />} />

        <Route path="/admin/home" element={<Activity_Feed />} />
        <Route path="/admin/home/:societyID" element={<Activity_Feed />} />
      </Routes>
    </>
    );
  }

  const showSecondaryNavbar = Locations[1] === "society";

  const showNavFooterFeedback = Locations[1].toLowerCase() !== "login" &&
       Locations[1].toLowerCase() !== "signup" &&
       Locations[1].toLowerCase() !== "reset-password" &&
       Locations[1].toLowerCase() !== "verify-email" &&
       Locations[1].toLowerCase() !== "changepassword"

  return (
    <>
      <ScrollTop />
      <ProgressBar />
      {showNavFooterFeedback && <Navbar />}
      <div className="font-mono transition-colors duration-300">
        {showSecondaryNavbar && <Secondary_navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BecomeMember" element={<Become_Member_Form />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/help-center" element={<HelpCenter />} />
          {/* <Route path="/openings/:id" element={<Openings />} /> */}
          <Route path="/roles" element={<Roles />} />
          <Route path="/coordinators" element={<Coordinators />} />
          <Route path="/achievements" element={<Achievements/>} />
          {/* <Route path="/testimonials/:id" element={<Testimonials />} /> */}
          <Route path="/create" element={<SocietyForm />} />
          <Route path="/createtestimonial" element={<CreateTestimonial />} />
          <Route path="/members" element={<SocietMembers />} />
          <Route path="/societies" element={<Allsocities />} />
          <Route path="/vision" element={<Vision />} />
          {/* <Route path="/news/:id" element={<News />} /> */}
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/query" element={<SocietyQueryForm />} />
          {/* <Route path="/evaluation/:id" element={<Evaluation />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/allgallery" element={<AllGallery />} />
          {/* <Route path="/society/:id" element={<Society />}  */}
          <Route path="/societygallery/:id" element={<SocietyGallery />} />
          <Route path="/slogin" element={<StudentLogin />} />
          <Route path="/events" element={<Events />} />
          <Route path="/societyjoinform" element={<Societyjoiningform />} />
          <Route path="/members/:enrollmentNo" element={<Evaluation />} />
          {/* <Route path="/Societymembers/:id" element={<SocietyMembers />} /> */}
          <Route path="/gallery/:Societyid/:ImageId" element={<ViewPhoto />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route
            path="/societyjoinrequest"
            element={<Societyjoiningrequst />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          <Route path="/feedbackform" element={<FeedbackForm />} />
          <Route path="/verify-email" element={<OTP />} />
          <Route
            path="/create-event/:societyid/:eventid"
            element={<CreateEventForm />}
          />
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/society/:id" element={<Society />}>
            <Route path="Societymembers" element={<SocietyMembers />} />
            <Route path="societygallery" element={<SocietyGallery />} />
            <Route path="events" element={<Events />} />
            <Route path="news" element={<News />} />
            <Route path="openings" element={<Openings />} />
            <Route path="coordinators" element={<Coordinators />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="news" element={<News />} />
            <Route path="evaluation" element={<Evaluation />} />
            <Route path="members" element={<SocietMembers />} />
          </Route>
        </Routes>
      </div>
      {/* {Locations[1].toLowerCase() !== "login" &&
        Locations[1].toLowerCase() !== "signup" &&
        Locations[1].toLowerCase() !== "verify-email" &&
        Locations[1].toLowerCase() !== "reset-password" &&
        Locations[1].toLowerCase() !== "changepassword" &&
        Locations[1].toLowerCase() !== "verify-email"  && (
          <Footer />
        )}
      {Locations[1].toLowerCase() !== "login" &&
        Locations[1].toLowerCase() !== "signup" &&
        Locations[1].toLowerCase() !== "verify-email" &&
        Locations[1].toLowerCase() !== "reset-password" &&
        Locations[1].toLowerCase() !== "changepassword" &&
        Locations[1].toLowerCase() !== "verify-email" && ( <FeedbackButton />) } */}
      {
        showNavFooterFeedback && <Footer/>
      }
      {
        showNavFooterFeedback && <FeedbackButton/>
      }
      <ScrollToTop />
    </>
  );
};

export default App;
