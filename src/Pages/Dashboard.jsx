import DashSideNav from '@/components/Dashboard/DashComponents/DashSideNav';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='w-full min-h-screen flex bg-gradient-to-br from-slate-50 to-slate-100'>
            
            {/* ------nav-section------- */}
           
                <DashSideNav></DashSideNav>
            
            <section className='w-5/6'>

                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;