import React, { useState } from 'react';
import { TableGrid } from '../../common/TableGrid';
import { filterCommon, convertDate, sortCommon, gridCommon } from '../../common/utilities-functions';

 

export const Student = () => {

    const [pageConfig,setPageConfig]=useState({
        pages: [

            1,2,3,4
        ],
        currentPage: 1,
        rowPerPage: 2,
        totalPage: 0
    })
    const [headers, setHeader] = useState([
        {
            isShow: false,
            displayName: "Input",
            columnName: "id",
            isSortable: false,
            type: 'num',
            isSearchable: false,
            searchs: [
            ],
            customDisplay: true,
            customDisplayIndex: 0

        },
        {
            displayName: "Id",
            columnName: "id",
            isSortable: true,
            type: 'num',
            isSearchable: true,
            searchs: [
                {
                    columnName: "id",
                    value: '',
                    type: 'num'

				}

            ]

        },
        {
            displayName: "Full Name",
            columnName: "name",
            isSortable: true,
            type: 'ci',
            isSearchable: true,
            searchs: [
                {
                    columnName: "name",
                    value: '',
                    type: 'ci'

                }

            ]
        },
        {
            displayName: "Subject",
            columnName: "subject",
            isSortable: true,
            type: 'cs',
            searchs: [
                {
                    columnName: "subject",
                    value: '',
                    type: 'ci'

                }

            ]
        },
        {
            displayName: "Fees",
            columnName: "fees",
            isSortable: true,
            type: 'num',
            isSearchable: true,
            searchs: [
                {
                    columnName: "fees",
                    value: '',
                    type: 'GteNum'

                },
                {
                    columnName: "fees",
                    value: '',
                    type: 'LteNum'

                }

            ]
        },
        {
            displayName: "DOJ",
            columnName: "doj",
            isSortable: true,
            type: 'date',
            isSearchable: true,
            searchs: [
                {
                    columnName: "doj",
                    value: '',
                    type: 'num'

                }

            ]
        },
        {
            displayName: "Action",
            columnName: "Action",
            isSortable: false,
            isSearchable: false,
            customDisplay: true,
            customDisplayIndex: 1
        }
         
    ])
    const [fullData, setFullData] = useState([
        {
            id: 1,
            name: 'Komal',
            subject: 'Javascript',
            fees: 21000,
            doj: '01-03-2022'
        },
        {
            id: 2,
            name: 'Nivant',
            subject: 'React',
            fees: 25000,
            doj: '01-02-2021'
        },
        {
            id: 3,
            name: 'Rajit',
            subject: 'Angular',
            fees: 29000,
            doj: '13-02-2022'
        },
        {
            id: 4,
            name: 'sanket',
            subject: 'MVC',
            fees: 29000,
            doj: '15-02-2022'
        },
        {
            id: 5,
            name: 'Yogesh',
            subject: 'java',
            fees: 39000,
            doj: '02-02-2022'
        },

    ])


    const [studentData, setStudentData] = useState([...fullData])
    const [sortOrder, setSortOrder] = useState(1);
    const [columnName, setcolumnName] = useState('id');
    const [columnType, setColumnType] = useState('num');
    const sortData = (data: any) => {
        debugger;
        setcolumnName(data?.columnName);
        setColumnType(data?.type);         
        setSortOrder(sortOrder * -1);

        const rows=   gridCommon(fullData,headers,columnName,columnType,sortOrder,pageConfig);
        const d = [...rows]
        setStudentData(d);
        setHeader([...headers])
        setPageConfig({...pageConfig});
	}
    const filterData = (header: any, searchData: any, val: any) => {
        searchData.value = val;
        const rows=   gridCommon(fullData,headers,columnName,columnType,sortOrder,pageConfig);
        debugger;
        const d = [...rows]
        setStudentData(d);
        setHeader([...headers])
        setPageConfig({...pageConfig});
	}

  
  
    const SetPagination=(e: any)=>{

        if(e<1 || e>pageConfig.pages.length){
            return;
        }
        pageConfig.currentPage=e;    
        const rows=   gridCommon(fullData,headers,columnName,columnType,sortOrder,pageConfig);
        const d = [...rows]
        setStudentData(d);
        setHeader([...headers])
        setPageConfig({...pageConfig});

    }
    return (
        <div className="container-xxl position-relative bg-white d-flex p-0">
            <div className="sidebar pe-4 pb-3">
                <nav className="navbar bg-light navbar-light">
                    <a href="index.html" className="navbar-brand mx-4 mb-3">
                        <h3 className="text-primary"><i className="fa fa-hashtag me-2" />DASHMIN</h3>
                    </a>
                    <div className="navbar-nav w-100">
                        <a href="index.html" className="nav-item nav-link active">
                            <i className="fa fa-tachometer-alt me-2" />Dashboard</a>
                        <div className="nav-item dropdown">
                            <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="fa fa-laptop me-2" />Elements</a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a href="button.html" className="dropdown-item">Buttons</a>
                                <a href="typography.html" className="dropdown-item">Typography</a>
                                <a href="element.html" className="dropdown-item">Other Elements</a>
                            </div>
                        </div>
                        <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2" />Widgets</a>
                        <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2" />Forms</a>
                        <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2" />Tables</a>
                        <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2" />Charts</a>
                        <div className="nav-item dropdown">
                            <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="far fa-file-alt me-2" />Pages</a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a href="signin.html" className="dropdown-item">Sign In</a>
                                <a href="signup.html" className="dropdown-item">Sign Up</a>
                                <a href="404.html" className="dropdown-item">404 Error</a>
                                <a href="blank.html" className="dropdown-item">Blank Page</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
           
            <div className="content">
                <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                    <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                        <h2 className="text-primary mb-0"><i className="fa fa-hashtag" /></h2>
                    </a>
                    <a href="index.html" className="sidebar-toggler flex-shrink-0">
                        <i className="fa fa-bars" />
                    </a>
                    <form className="d-none d-md-flex ms-4">
                        <input className="form-control border-0" type="search" placeholder="Search" />
                    </form>
                    <div className="nav-item dropdown">
                        <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-bell me-lg-2" />
                            <span className="d-none d-lg-inline-flex">Notificatin</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="index.html" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider" />
                                <a href="index.html" className="dropdown-item">
                                    <h6 className="fw-normal mb-0">New user added</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr className="dropdown-divider" />
                                    <a href="index.html" className="dropdown-item">
                                        <h6 className="fw-normal mb-0">Password changed</h6>
                                        <small>15 minutes ago</small>
                                    </a>
                                    <hr className="dropdown-divider" />
                                        <a href="index.html" className="dropdown-item text-center">See all notifications</a>
                        </div>
                    </div>
                    </nav>

            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Recent Salse</h6>
                        <a href="index.html">Show All</a>
                        </div>

                        <div>
                            <span >Id</span><input type="text" />
                            <span >Name</span><input type="text" />

                            <button type="button" >Search</button>
                        </div>
                   <TableGrid headers={headers} filterData={filterData} sortData={sortData} tableData={studentData} >
                           <input className="form-check-input" type="checkbox" />
                          <div>
                            <a className="btn btn-sm btn-primary" href="index.html">Edit</a>
                           <a className="btn btn-sm btn-danger" href="index.html">Delete</a>
             
                          </div>
                                 </TableGrid>
                    <div className='mt-4'>
                    <ul className="pagination">
                    <li className={pageConfig.currentPage===1 ? 'page-item disabled' : 'page-item' }><a className="page-link"  onClick={(eve)=>{ SetPagination(pageConfig.currentPage -1); eve.preventDefault();  }} href="index.html">Previous</a></li>
                     
                     {
                        pageConfig.pages.map((e)=>{
                            return (
                                <li className={e===pageConfig.currentPage ? 'page-item active': 'page-item'}  ><a className="page-link" onClick={(eve)=>{ SetPagination(e); eve.preventDefault();  }} href="index.html">{e}</a></li>
                            );
                        })
                     }
                       
                        <li className={pageConfig.currentPage===pageConfig.pages.length ? 'page-item disabled' : 'page-item' }><a className="page-link" onClick={(eve)=>{ SetPagination(pageConfig.currentPage +1); eve.preventDefault();  }} href="index.html">Next</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
                   



