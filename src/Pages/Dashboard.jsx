import DashSideNav from '@/components/Dashboard/DashComponents/DashSideNav';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
       <div className="w-full min-h-screen flex bg-gradient-to-br from-slate-50 to-slate-100">
            {/* ------nav-section------- */}
            <DashSideNav />
            {/* Content section */}
            <section className="flex-1 min-h-screen overflow-auto bg-beige">
                <Outlet />
            </section>
        </div>
    );
};

export default Dashboard;