import React,{useState,useEffect} from "react";
import { ethers } from "ethers";
import abi from "../contract/Tracking.json";
// import {useAddress} from "@thirdweb-dev/react";

const contractAddress="0x980049D06826C92dd23E37f3E4D53c40fc808bf6";
const contractAbi=abi.abi;

export const TrackingContext=React.createContext();

export const TrackingProvider =({children})=>{
    const DappName="Product Tracking Dapp";
    const { ethereum } = window;
    const [currentUser,setCurrentUser]=useState("");

    const createShipment=async(items)=>{
     
        const {receiver,pickUptime,distance,price}=items;
        
      
        try{
            const { ethereum } = window;
            const provider=new ethers.providers.Web3Provider(ethereum);
            const signer=provider.getSigner();
            
            const contract=new ethers.Contract(contractAddress,contractAbi,signer);
           
            const createItem=await contract.createShipment(receiver,new Date(pickUptime).getTime(),distance,ethers.utils.parseUnits(price,18),{value:ethers.utils.parseUnits(price,18),});
            
            await createItem.wait();
           
            console.log(createItem);
        }
        catch(e){
            console.log(e);
        }
        
    }
    const getAllShipment=async()=>{
         try{
            const { ethereum } = window;
            const provider=new ethers.providers.Web3Provider(ethereum);
            const signer=provider.getSigner();
            const contract=new ethers.Contract(contractAddress,contractAbi,signer);
            // console.log(contract)
            const shipments=await contract.getAllTransaction();
            const allShipments=shipments.map((shipment)=>({
                sender:shipment.sender,
                receiver:shipment.receiver,
                price:ethers.utils.formatEther(shipment.price.toString()),
                pickupTime:shipment.pickupTime.toNumber(),
                deliveryTime:shipment.deliveryTime.toNumber(),
                distance:shipment.distance.toNumber(),
                isPaid:shipment.isPaid,
                status:shipment.status,
            }));
            return allShipments;
            
        }
        catch(e){
            console.log("Some went wrong getting all shipment");
        }
    
    }
    const getShipmentsCount=async()=>{
        try{
            const { ethereum } = window;
            const accounts=await window.ethereum.request({
                method:"eth_accounts",
            })
            // const account = useAddress();
            const provider=new ethers.providers.Web3Provider(ethereum);
            const signer=provider.getSigner();
           
            const contract=new ethers.Contract(contractAddress,contractAbi,signer);
            const shipmentsCount=await contract.getShipmentCount(accounts[0]);
            return shipmentsCount.toNumber();
          
        }
        catch(e){
            console.log("Some went wrong getting shipment");
        }
    }
    const completeShipment=async(completeShip)=>{
        console.log(completeShip);
        const {receiver,index}=completeShip;
        try{
            const { ethereum } = window;
            // const account = useAddress();
            const accounts=await window.ethereum.request({
                method:"eth_accounts",
            });
            const provider=new ethers.providers.Web3Provider(ethereum);
            const signer=provider.getSigner();
            const contract=new ethers.Contract(contractAddress,contractAbi,signer);
            const transaction=await contract.completeShipment(accounts[0],receiver,index,{gasLimit:300000,});
            transaction.wait();
            console.log(transaction);

          
        }
        catch(e){
            console.log("Wrong complete Shipment",e);
        }
    }

    const getShipment=async(index)=>{
     
        // console.log(index+1);
        
        
        try{
            const { ethereum } = window;
            const provider=new ethers.providers.Web3Provider(ethereum);
            const signer=provider.getSigner();
            const contract=new ethers.Contract(contractAddress,contractAbi,signer);
            const accounts=await window.ethereum.request({
                method:"eth_accounts",
            });
            const shipment=await contract.getShipment(accounts[0],index);
            const SingleShipment={
                sender:shipment[0],
                receiver:shipment[1],
                pickupTime:shipment[2].toNumber(),
                deliveryTime:shipment[3].toNumber(),
                distance:shipment[4].toNumber(),
                price:ethers.utils.formatEther(shipment[5].toString()),
                status:shipment[6],
                isPaid:shipment[7],
            }  
            return SingleShipment;
         
        }
        catch(e){
            console.log("Wrong complete Shipment",e);
        }
    }
    const startShipment=async(getProduct)=>{
        const {receiver,index}=getProduct;
        // console.log(Number(index));
        try{
            const { ethereum } = window;
            const provider=new ethers.providers.Web3Provider(ethereum);
            const signer=provider.getSigner();
            const contract=new ethers.Contract(contractAddress,contractAbi,signer);
            const accounts=await window.ethereum.request({
                method:"eth_accounts",
            });
            const shipment=await contract.startShipment(accounts[0],receiver,index,{gasLimit:300000,});
            shipment.wait();
            console.log(shipment);
         
        }
        catch(e){
            console.log("Sorry no shipment",e);
        }
    };
    const checkifWalletConnected=async()=>{
        try{
            if(!window.ethereum){
                return "Install Metamask";
            }
            const accounts=await window.ethereum.request({
                method:"eth_accounts",
            });

            if(accounts.length){
                setCurrentUser(accounts[0]);
            }
            else{
                return "No Account";
            }

        }
        catch(e){
           return "not Connected";
        }
    };
    
    const connectWallet=async()=>{
        
        try{
            if(!window.ethereum){
                return "Install Metamask";
            }
            const accounts=await window.ethereum.request({
                method:"eth_requestAccounts",
            });

            setCurrentUser(accounts[0]);

        }
        catch(e){
           return "Something Went wrong";
        }
    };
    // useEffect(()=>{
    //     return async()=>{
    //         try{
    //             if(!window.ethereum){
    //                 return "Install Metamask";
    //             }
    //             const accounts=await window.ethereum.request({
    //                 method:"eth_requestAccounts",
    //             });
    
    //             setCurrentUser(accounts[0]);
    
    //         }
    //         catch(e){
    //            return "Something Went wrong";
    //         }
    //     }
    // },[ethereum])
    useEffect(()=>{
        checkifWalletConnected();
    },[ethereum]);
    return(
       
        <TrackingContext.Provider
          value={{
            connectWallet,
            createShipment,
            getAllShipment,
            completeShipment,
            getShipment,
            startShipment,
            getShipmentsCount,
            DappName,
            currentUser,
            checkifWalletConnected,
          }}
        >
            {children}
        </TrackingContext.Provider>
    );
}
