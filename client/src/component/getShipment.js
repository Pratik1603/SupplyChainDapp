// import React from "react";
// import { useState,useEffect } from "react";
// import { ethers } from "ethers";

// const GetShipment=({getModel,setGetModel,getShipment,getShipmentCount})=>{
// const [count,setCount]=useState();
// const [getIndex,setGetIndex]=useState(0);
// const [data,setData]=useState();

// const converTime=(time)=>{
//     const newTime=new Date(time);
//     const dataTime=new Intl.DateTimeFormat("en-US",{
//         year:"numeric",
//         month:"2-digit",
//         day:"2-digit",
//     }).format(newTime);
//     return dataTime;
// };

// useEffect(()=>{
//     const getShipmentsData=getShipmentCount();
//     return async()=>{
//         const allData=await getShipmentsData;
//         // console.log("k");
//         setCount(allData);
//     }
    
// });
// const totShipment=[];
// const getShipping=async()=>{
//     let i=0;
//     // console.log(count);
    
   
//     for(let i=0;i<count;i++){
//         let myShipment =await getShipment(i);
//         totShipment.push(myShipment);
//     }
//     // return (
//     //     const allData=totShipment;
//     //     setData(allData);
//     //     console.log(data);    
//     // )   
  
   
// }
// // return getModel?(
//     // <div className="fixed inset-0 z-10 overflow-y-auto">
//     // <div  className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=>setGetModel(false)}>
    
//     // </div>
//     // <div className="flex item-center  px-4 py-3">
//     // <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
//     // <div className="flex justify-end">
        
//     //  <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100" onClick={()=>setGetModel(false)}>
//     //     {/* {CloseIcon} */}
//     //  </button>
//     // </div>

//     // <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
//     // <h4 className="text-lg font-medium text-gray-800">
//     //     Get Shipment
//     // </h4>
//     // <p className="text-[15px] text-gray-600">
//     //     dfifrnrfrfrf

//     // </p>
//     // <form onSubmit={(e)=>e.preventDefault()}>
        
        
//     //     <div className="relative mt-3">
//     //         <input type="number" placeholder="ID" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" onChange={(e)=>setGetIndex( e.target.value)}/>
//     //     </div>
       
        

//     {/* </form> */}

    
// // </div>
// // </div>
// // </div>
// // </div>


// // ):"";

// return (
//     <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
//         <button onClick={getShipping} className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 activate:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus-ring-2">
//                 Get Shipping
//         </button>
//                            <table className="w-full table-auto text-sm text-left">
//                              <thead className="bg-gray-50 text-gray-600 font-medium border-b" >
//                                 <tr  >
//                                     <th className="py-3 px-6">Sender</th>
//                                     <th className="py-3 px-6">Receiver</th>
//                                     <th className="py-3 px-6">Pick up Time</th>
//                                     <th className="py-3 px-6">Distance</th>
//                                     <th className="py-3 px-6">Price</th>
//                                     <th className="py-3 px-6">Delivery Time</th>
//                                     <th className="py-3 px-6">Paid</th>
//                                     <th className="py-3 px-6">Status</th>
//                                 </tr>
//                              </thead>
//                              <tbody className="text-gray-600 divide-y">
//                                 {/* {data.map((shipment,idx)=>( 

//                                     <tr>
//                                     <td  className="px-6 py-4 whitespace-nowrap">{shipment}</td>
//                                     </tr>
//                                 ))} */}
//                                 {
//                                     totShipment.length>0?console.log(totShipment):""
                                
//                                     // totShipment.map((shipment)=>{
//                                     //     <tr>
//                                     //         <td>{shipment.price}</td>
//                                     //     </tr>
//                                     // })
//                                 }
                                
                                
//                              </tbody>
//                            </table>
//                         </div>
// )

// }




// export default GetShipment;