import React, { useContext, useEffect,useState } from "react";
import { TrackingContext } from "../context/tracking";
import App from "../App";
import { ethers } from "ethers";
import Profile from "./profile";
import img2 from "../logo_ship.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar=({setOpenProfile})=>{
   
    const [state,setState]=React.useState(false);
    // const [openProfile,setOpenProfile]=useState(false);
    const { currentUser,connectWallet,getShipmentsCount}=useContext(TrackingContext);
    const [balance,setbalance]=useState();
    const navigation=[
        {title:"Home",path:"#"},
        {title:"Services",path:"#"},
        {title:"Contatct Us",path:"#"},
        {title:"ERc20",path:"#"},
    ];
    useEffect(()=>{
        return async()=>{
       
         const { ethereum } = window;
         const accounts=await window.ethereum.request({
             method:"eth_accounts",
         });
         const provider=new ethers.providers.Web3Provider(ethereum);
         const bal = await provider.getBalance(accounts[0]);
         setbalance(ethers.utils.formatEther(bal));
         
     }
     
    })
    useEffect(()=>{
        document.onclick=(e)=>{
            const target=e.target;
            if(!target.closest(".menu-btn")){
                setState("false");
            }

        };
    },[]);
   
    

    return(
        
        <nav className={`bg-white  md:text-sm ${state?"shadow-lg rounded-xl border mx-2 mb-6 mt-2 md:shadow-none md:border:none md:mx-2 md:mt-0":""}`}>
            <div className="gap-x-16 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                 <div className="flex items-center justify-between py-5 md:block">
                    <img style={{height:"70px"}}src={img2}/>
                     <div className="md:hidden">
                         <button className="menu-btn text-gray-500 hover:text-gray-800" onClick={()=>setState(!state)
                         }>
                            <MenuIcon/>
                         </button>
                     </div>
                 </div>
                <div className={`flex-1 gap-x-8 items-center mt-8 md:mt-0 md:flex ${state?"block" :"hidden"}`}>
                <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                 {navigation.map((item,idx)=>{
                     return(
                         <li key={idx} className="text-gray-700 hover:text-[#082f49] hover:font-bold">
                             <a style={{textDecoration:"none"}} href={item.path} className="block">{item.title}</a>
                         </li>
                     );
                 })}
                 </ul>
                 
                 <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0 mb-4">
                    <div onClick={()=>setOpenProfile(true)} className="border-solid  h-12 w-12 border-black mt-6 space-y-6   md:mt-0">
                     <AccountCircleIcon style={{fontSize:"45px",color:"#172554",textAlign:"center"}}/>
                    </div>  
                    {currentUser?(
                        <p  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 activate:bg-gray-900 rounded-full md:inline-flex">{currentUser.slice(0,25)}..</p>
                    ):(<button onClick={()=>connectWallet} className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 activate:bg-gray-900 rounded-full md:inline-flex">
                        Connect Wallet
                    </button>)}
                 </div>
                 

             </div>
             
             </div>
             
        </nav>
       

        
    )

    // return <div>Navbar</div>
}

export default Navbar;