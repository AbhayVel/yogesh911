import React, { Children, useState } from 'react';
// import logo from '../../assets/images/icons/logo.svg'

export const TreeStrcture = () => {

    const [headers, setheader] = useState([
        {
            displayName: "Beverages Title",
            titleName: "Beverages",
            firstChildren:[
                {
                    displayName: "Water",
                    titleName: "Water",
                },
                {
                    displayName: "Coffee",
                    titleName: "Coffee",
                },
                {
                    displayName: "Tea",
                    titleName: "Tea",
                        secondChildren:[ 
                        {
                            displayName: "Black Tea",
                            titleName: "Black Tea",
                        },
                        {
                            displayName: "White Tea",
                            titleName: "White Tea",
                        },
                        {
                            displayName: "Green Tea",
                            titleName: "Green Tea",
                                thirdChildren:[ 
                                    {
                                        displayName: "Sencha",
                                        titleName: "Sencha",
                                    },
                                    {
                                        displayName: "Gyokuro",
                                        titleName: "Gyokuro",
                                    },
                                    {
                                        displayName: "Matcha",
                                        titleName: "Matcha",
                                    },
                                    {
                                        displayName: "Pi Lo Chun",
                                        titleName: "Pi Lo Chun",
                                    }
                                ]
                        }
                    ]
                }
            ]

        }
       


    ]);
 

    return (
        <div className='row'>
            <div className='col-lg-4'>
                <div className="card">
                    {/* <img className="card-img-top" src="{logo}" alt="Card cap"/> */}
                    <div className="card-body">

                        {
                            headers.map((e) => {

                                return (
                                    <div>
                                        <ul id="myUL">
                                            <li>
                                                <span className="caret">{e.displayName}</span>

                                                {
                                                e.firstChildren && e.firstChildren.map((f) => {
                                                  return (
                                                     
                                                        <ul className="nested">
                                                            <li><span >{f.displayName}</span>
                                                            
                                                            {
                                                                f.secondChildren && f.secondChildren.map((s) => {
                                                                return (
                                                                    <ul className="nested">
                                                                        <li>{s.displayName}
                                                                         {
                                                                            s.thirdChildren && s.thirdChildren.map((t) => {

                                                                                return (
                                                                                    <ul className="nested">
                                                                                        <li>{t.displayName}</li>
                                                                                    </ul>
                                                                                )
                                                                            })

                                                                         }
                                                                        
                                                                        </li>
                                                                    </ul>
                                                                )

                                                              }

                                                              )

                                                            }
                                                            
                                                            </li>
                                                        </ul>
                                                      )
                                                
                                            })
                                        }
                                                
                                            </li>
                                        </ul>
                                    </div>


                                )
                            })


                        }



                    </div>
                </div>
            </div>
        </div>


    )
}




