import React from 'react';
import pfp from "../../../../public/pfp.jpeg";

const SmallAdminPfp = () => {
    return (
        <div className='flex bg-white items-center justify-between p-4 rounded-xl'>
            <div>
                <h3>Mahinul Tanvir Mahin</h3>
                <p>Admin</p>
            </div>
            <img className='size-18 rounded-full border-4 p-0.5 border-green-400' src={pfp} alt="" />
        </div>
    );
};

export default SmallAdminPfp;