import React, { useState,useEffect } from "react";
import { ethers } from "ethers";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Profile=({openProfile,setOpenProfile,currentUser,getShipmentCount,balance})=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const getShipmentsData=getShipmentCount();
        return async()=>{
            const allData=await getShipmentsData;
            // console.log("k");
            setCount(allData);
        }
        
    });
    // const findCount=async()=>{
    //     const getShipmentsData=getShipmentCount();
    //     const allData=await getShipmentsData;
    //     console.log("k");
    //     setCount(allData);
    // }
        
 

    return openProfile?(
        <div className="fixed inset-0 z-10 overflow-y-auto">
        <div  className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=>setOpenProfile(false)}>
        
        </div>
        <div className="flex item-center  px-4 py-14">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
        <div className="flex justify-end">
            
         <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100" onClick={()=>setOpenProfile(false)}>
            {/* {CloseIcon} */}
         </button>
        </div>
        <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <div className="flex flex-col items-center pb-3">
                <AccountCircleIcon style={{fontSize:"150px",color:"#172554"}}/>
            </div>
            <h5 className="mb-1 pb-3 text-xl font-medium text-gray-900 dark:text-black">
                Welcome Trader
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
                {currentUser}
            </span>
            <div className="flex mt-4 gap-x-20 md:mt-6">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black rounded-lg border-2">
                    Balance:{balance.slice(0,5)} ETH
                </a>
                <a  href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black rounded-lg border-2">
                    Total Shipment :{count}
                </a>
            </div>
        </div>
       
        
    
    </div>
    </div>
    </div>
    ):"";
}

export default Profile;