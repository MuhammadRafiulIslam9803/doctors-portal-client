import React, { useContext } from 'react';
import Header from '../Pages/CommonComponent/Header';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Pages/Authontication/AuthProvider';
import useAdmin from '../Hook/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full  text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;