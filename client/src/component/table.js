

import React from "react";

const Table=({setCreateShipmentModel,allShipmentsData})=>{
    const converTime=(time)=>{
                const newTime=new Date(time);
                const dataTime=new Intl.DateTimeFormat("en-US",{
                    year:"numeric",
                    month:"2-digit",
                    day:"2-digit",
                }).format(newTime);
                return dataTime;
            };
        
        //  console.log(allShipmentsData);
        
        return(
                <div className="max-w-screen-xl mx-auto mt-8 px-4 md:px-8">
                    <div className="items-start justify-between md:flex">
                        <div>
                            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl w-60 ">
                                Create Tracking
                            </h3>
                            <button onClick={()=>{setCreateShipmentModel(true)}} className="text-white mt-8 font-bold bg-[#172554] rounded-2xl py-4 px-4 hover:bg-[#1e3a8a]">
                                Add Tracking
                            </button>
                        </div>
                        <div className=" overflow-x-auto ">
                        <div className="font-bold text-2xl text-center">All Shipments</div>
                        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto ">
                           
                            
                           <table className="w-full table-auto text-sm text-left">
                             <thead className="bg-gray-50 text-gray-600 font-medium border-b" >
                                <tr  >
                                    <th className="py-3 px-6">Sender</th>
                                    <th className="py-3 px-6">Receiver</th>
                                    <th className="py-3 px-6">Pick up Time</th>
                                    <th className="py-3 px-6">Distance</th>
                                    <th className="py-3 px-6">Price</th>
                                    <th className="py-3 px-6">Delivery Time</th>
                                    <th className="py-3 px-6">Paid</th>
                                    <th className="py-3 px-6">Status</th>
                                </tr>
                             </thead>
                             <tbody className="text-gray-600 divide-y">
                                {allShipmentsData?.map((shipment,idx)=>(
                                    <tr key={idx}>
                                    <td  className="px-6 py-4 whitespace-nowrap">{shipment.sender.slice(0,15)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{shipment.receiver.slice(0,15)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{converTime(shipment.pickupTime)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{shipment.distance}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{shipment.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{converTime(shipment.deliveryTime)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{shipment.isPaid?"COMPLETED":"NOT COMPLETED"}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{shipment.status===0?"PENDING":shipment.status===1?"IN_TRANSIT":"Delivered"}</td>
                                  </tr>
                                ))}
                                
                                
                             </tbody>
                           </table>
                        </div>
                        </div>
                        
                        
                    </div>
                </div>
        );
}

export default Table;