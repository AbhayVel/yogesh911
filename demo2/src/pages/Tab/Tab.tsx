import React, { useState } from "react";

export const Tab = () => {
    const [header,setHeader] = useState([
        {
            tabName: "Home"
        },
        {
            tabName: "Profile"
        },
        {
            tabName: "Contact"
        }
    ])
    const [tabData, setTabData] = useState([
        {
            isExpandable: true,
            isOpen: true,
            tabData: "Home: This is some placeholder content the Contact tab's associated content."
        },
        {
            isExpandable: true,
            isOpen: false,
            tabData: "Profile: This is some placeholder content the Contact tab's associated content."
        },
        {
            isExpandable: true,
            isOpen: false,
            tabData: "Contact: This is some placeholder content the Contact tab's associated content."
        }
    ])

    const tabOpen = (data:any) =>{
        const tab = data.tabName;
        if (tab){
           // e.isOpen = true
        }
    }
    return (
        <div className="container p-4">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {
                    header.map((e: any) => {
                        return (
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" type="button" onClick={()=>{tabOpen(e)}}>{e.tabName}</button>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="tab-content" id="myTabContent">
                {
                    tabData.map((e: any) => {
                        return (
                            <div className ={ e.isOpen? 'tab-pane fade show active' : 'tab-pane fade'}  id="home" role="tabpanel" aria-labelledby="home-tab">{e.tabData}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}


