import { createBrowserRouter } from "react-router-dom";
import MianLayout from "./MianLayout";
import Banner from "../Pages/Home/Banner";
import BookingHome from "../Pages/Booking/BookingHome";
import Login from "../Pages/Authontication/Login";
import Registration from "../Pages/Authontication/Registration";

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
])
export default router;