import React from "react";
import "./services.css";
import img1 from "../ship.jpeg"
const Services=({
       setCompleteModal,
       setStartModal,
    })=>{
    const team=[
    {
        avatar:"Complete Shipment",
    },
    {
        avatar:"Start Shipment",
    },
   
    
    ];
 
    const openModelBox=(text)=>{
        if(text==1){
            setCompleteModal(true);
        }

        else if(text==2){
            setStartModal(true);
        }
                        
    }
    // console.log(team);
    return(
        <section>
            <div style={{display:"flex",flexDirection:"row",columnGap:"2px",justifyContent:"space-evenly",marginLeft:"4px"}}>
               
            
                <div style={{width:"50%", display:"flex",flexDirection:"column",rowGap:"40px"}}>
                        
                      {team.map((item,i)=>{
                            
                            return(
                                <div  className="service-block" onClick={()=>openModelBox(i+1)}>
                                     <h2>
                                        {item.avatar}
                                    </h2>
                                </div>
                            )
                           
                   
                    })}
                </div>
                <div>
                 <img src={img1}/>
                </div>
            </div>
        </section>
        // <div>
        //     Hello
        // </div>
    )                
    // return <div>Services</div>
}

export default Services;