import { createBrowserRouter } from "react-router-dom";
import MianLayout from "./MianLayout";
import Banner from "../Pages/Home/Banner";
import BookingHome from "../Pages/Booking/BookingHome";
import Login from "../Pages/Authontication/Login";
import Registration from "../Pages/Authontication/Registration";
// import DashboardHome from "../Pages/Dashboard/DashboardHome";
import PrivateRouter from "../Pages/Authontication/PrivateRouter"
import DashboardLayout from "../Layout/DashboardLayout"
import MyAppointment from "../Pages/Dashboard/MyAppointment";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AdminRoute from "../Pages/Authontication/AdminRoute";
import AddDoctor from "../Pages/Dashboard/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors";

const router = createBrowserRouter([
    {
        path :"/",
        element : <MianLayout></MianLayout>,
        children :[
            {
               path :"/",
               element : <Banner></Banner> 
            },
            {
               path :"/booking",
               element : <BookingHome></BookingHome> 
            },
            {
               path :"/login",
               element : <Login></Login> 
            },
            {
               path :"/signup",
               element : <Registration></Registration> 
            },
            
        ]
    },
    {  
         path :"/dashboard",
         element : <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
         children:[
            {
               path : "/dashboard",
               element : <MyAppointment></MyAppointment>
            },
            {
               path : "/dashboard/allusers",
               element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
               path : "/dashboard/adddoctor",
               element : <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
               path : "/dashboard/managedoctors",
               element : <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
         ]
    },
])
export default router;