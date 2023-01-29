import React, { useState } from 'react';
import { Collapsable, CollapsableBody } from '../../common/AccordianC';

export const Accordian = () => {
    const [isActive, setActive] = useState (false)
    const [ accData, setAccData ] = useState ([
        {
            key: "1",
            title: 'title 1',
            isExpandable: true,
            isOpen: true,
            isAlwaysOpen : true,
            body : null
        },
        {
            key: "2",
            title: 'title 2',
            isExpandable: true,
            isOpen: false,
            isAlwaysOpen : false,
            body : null
        }, {
            key: "3",
            title: 'title 3',
            isExpandable: true,
            isOpen: false,
            isAlwaysOpen : false,
            body : null
        }
    ])
    const isCollpsBtn = (e : any) =>{
         accData.forEach(element => {
            if (element === e ){
                // e.isOpen = !e.isOpen
                if(!e.isOpen){
                    e.isOpen = true;
                }
            }else if (!element.isAlwaysOpen) {
                    element.isOpen = false               
                
            }
        });
        // if (e.isOpen === true){
        //     e.isOpen = false;

        // }else{
        //     e.isOpen = true;
        // }
        setAccData ([...accData])
    };

    return (

        <Collapsable accData={accData} setAccData={setAccData} >

            <CollapsableBody key="1" >  <div> I am need to show in first
                <table>
                    <tr>
                        <th>Header 1 </th>
                    </tr>
                    <tr>
                        <td>Ranjit</td>

                        </tr>
                    </table>

            </div></CollapsableBody>
            <CollapsableBody key="3" >  <div> I am need to show in Third </div></CollapsableBody>

        </Collapsable>
    )
}