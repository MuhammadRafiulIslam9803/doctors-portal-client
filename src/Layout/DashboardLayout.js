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
                <div className="drawer-side bg-primary shadow-md">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full text-base-content">
                        <li className="mb-4">
                            <Link to="/dashboard" className="text-white hover:text-white hover:bg-accent rounded-lg py-2 px-4 block">
                                My Appointments
                            </Link>
                        </li>
                        {isAdmin && (
                            <>
                                <li className="mb-4">
                                    <Link to="/dashboard/allusers" className="text-white hover:text-white hover:bg-accent rounded-lg py-2 px-4 block">
                                        All Users
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/dashboard/adddoctor" className="text-white hover:text-white hover:bg-accent rounded-lg py-2 px-4 block">
                                        Add A Doctor
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/dashboard/managedoctors" className="text-white hover:text-white hover:bg-accent rounded-full py-2 px-4 block">
                                        Manage Doctors
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default DashboardLayout;