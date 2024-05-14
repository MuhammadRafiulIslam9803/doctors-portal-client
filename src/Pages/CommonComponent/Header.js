import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authontication/AuthProvider';

const Header = () => {
    const {logOut,user}=useContext(AuthContext)

    const handleLogOutUser= () =>{
        logOut()
        .then(() => { })
        .catch(erro => console.error(erro));
    }
    const headerItems = <React.Fragment>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/booking' >Appointment</Link></li>
        <li><Link to='/contact' >Contact Us</Link></li>
        
        {user?.uid ?<>
        <li><Link to='/dashboard' >Dashboard</Link></li>
        <li><button onClick={handleLogOutUser}>Logout</button></li>
        </> 
        :<li><Link to='/login' >Login</Link></li>}
    </React.Fragment>
    return (
        <section>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {headerItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {headerItems}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Header;