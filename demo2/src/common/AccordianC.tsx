import React, { useState, Children } from 'react';


export const CollapsableBody = (props: any) => {

    const { key, children } = props;
    debugger;
    return (
        <div className="card-body">
             
            {children}
            </div>
    )
}

export const Collapsable = (props: any) => {

    const { accData, setAccData, children } = props;
    debugger;
    const isCollpsBtn = (e: any) => {
        debugger
        accData.forEach((element: any) => {
            if (element === e) {
                // e.isOpen = !e.isOpen
                if (!e.isOpen) {
                    e.isOpen = true;
                }
            } else if (!element.isAlwaysOpen) {
                element.isOpen = false

            }
        });
        // if (e.isOpen === true){
        //     e.isOpen = false;

        // }else{
        //     e.isOpen = true;
        // }
        setAccData([...accData])
    };

   
    return (

        <div className="accordion" id="accordionExample">
            {
                accData && accData.map((e: any) => {
                    return (
                        <div key={e.key} className="card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={(eve: any) => { isCollpsBtn(e); eve?.preventDefault() }}>
                                        {e.title}
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseOne" className={e.isOpen ? 'collapse show' : 'collapse'} aria-labelledby="headingOne" data-parent="#accordionExample">
                                {e.body &&
                                    <div className="card-body">
                                        {e.body}
                                    </div>
                                }
                                {!e.body &&
                                   
                                    children.filter((c: any) => {

                                        return c.key === e.key;
                                    })
                                     
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}