
import './App.css';
import { ethers } from "ethers";
import React, { useState, useEffect,useContext } from "react";
import { Navbar,Footer} from './component';
import { Services,Form,CompleteShipment,StartShipment,Profile,Table} from './component/index';

import { TrackingContext } from "./context/tracking";

function App({openprofile}) {
const {createShipment,getAllShipment,currentUser,getShipmentsCount,completeShipment,getShipment,startShipment}=useContext(TrackingContext);
const [createShipmentModel,setCreateShipmentModel]=useState(false);

  
const [openProfile,setOpenProfile]=useState(openprofile);
const [getModel,setGetModel]=useState(false);
const [startModal,setStartModal]=useState();
const [completeModal,setCompleteModal]=useState();
const [allShipmentsData,setallShipmentsData]=useState();
const [balance,setbalance]=useState();
useEffect(()=>{
  const getCampaignsData=getAllShipment();
  
  return async()=>{
    const allData=await getCampaignsData;
    setallShipmentsData(allData);
  }
})

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
  return (
    <>
    
       <Navbar
          setOpenProfile={setOpenProfile}
       />  
      
       <Services 
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModel={setGetModel}
        setStartModal={setStartModal}
      />
       
      <Table
        setCreateShipmentModel={setCreateShipmentModel}
        allShipmentsData={allShipmentsData}
      />
       
      <Form
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel}
      />
        
      <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentCount={getShipmentsCount}
        balance={balance}
      />
   
      <CompleteShipment
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
      />
    
      
      <StartShipment
        startModal={startModal}
        setStartModal={setStartModal}
        startShipment={startShipment}
      />
     
      <Footer/>
      
    </>
   
  );
}

export default App;
