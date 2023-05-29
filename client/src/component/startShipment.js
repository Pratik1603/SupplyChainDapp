import React from "react";
import { useState } from "react";
const StartShipment=({startModal,setStartModal,startShipment})=>{
    const [getProduct,setGetProduct]=useState({
        receiver:"",
        index:"",
    });

    const startShipping=()=>{
        console.log(typeof(getProduct.index));
        console.log(getProduct.index);
        startShipment(getProduct);
    }
    return startModal?(
        <div className="fixed inset-0 z-10 overflow-y-auto">
        <div  className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=>setStartModal(false)}>
        
        </div>
        <div className="flex item-center  px-4 py-14">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
        <div className="flex justify-end">
            
         <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100" onClick={()=>setStartModal(false)}>
            {/* {CloseIcon} */}
         </button>
        </div>

        <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
        <h4 className="text-lg font-bold text-gray-800">
            Start Shipment
        </h4>
        <p className="text-[15px] text-gray-600">
        You can start your shipment by mentioning the receiver address and id of the shipment<br></br>
          

        </p>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div className="relative mt-3">
                <input type="text" placeholder="receiver" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" onChange={(e)=>setGetProduct({
                    ...getProduct,
                    receiver:e.target.value,
                })}/>
                
              
            </div>
            
            <div className="relative mt-3">
                <input type="number" placeholder="ID" className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" onChange={(e)=>setGetProduct({
                    ...getProduct,
                    index:Number(e.target.value),
                })}/>
            </div>
           
            <button onClick={startShipping} className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 activate:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus-ring-2">
                    Start Shipping
            </button>

        </form>
    </div>
    </div>
    </div>
    </div>
    

):"";
}
export default StartShipment;