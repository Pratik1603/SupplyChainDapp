import React from "react";

const Footer=()=>{
    const footerNavs=[
        {
            href:"javascript:void()",
            name:"Terms",
        },
        {
            href:"javascript:void()",
            name:"Terms",
        },
        {
            href:"javascript:void()",
            name:"Terms",
        },
        {
            href:"javascript:void()",
            name:"Terms",
        }
    ]
    return (
        <footer>
            <div>
                <div>
                    <img></img>
                    <p></p>
                    <ul>
                        {footerNavs.map((item,idx)=>{
                            <li>
                                <a key={item.idx} href={item.href}>
                                    {item.name};
                                </a>
                            </li>
                        })}
                    </ul>
                </div>
                <div>
                    <p></p>
                    <div>
                        <a href="javascript:void()">

                        </a>

                        <a href="javascript:void()">

                        </a>
                    </div>
                </div>
            </div>
            <div>
              <p>©</p>  
            </div>
        </footer>
    )
}

export default Footer;