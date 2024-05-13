import { createBrowserRouter } from "react-router-dom";
import MianLayout from "./MianLayout";
import Banner from "../Pages/Home/Banner";
import BookingHome from "../Pages/Booking/BookingHome";

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
        ]
    },
])
export default router;