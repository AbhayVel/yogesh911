import React from 'react';

export const TRSearchHeader = (props: any) => {
 const {headers,filterData}=props;

    return (
        <tr className="text-dark">
        {
            headers.map((e: any) => {
                if(e?.isShow===false){
                    return (
                      <>&nbsp;</>
                    );
                  }  
                if (e?.isSearchable === true) {
                    return (
                        <th>
                            {
                                e?.searchs?.map((s: any) => {
                                    return (
                                        <input className="search" onChange={(event: any) => {


                                            filterData(e, s, event?.target?.value);
                                        }} type="text" />
                                    )
                                }
                                )
                            }
                        </th>
                    )
                }

                return (
                    <th>&nbsp;</th>
                )


            })
        }

    </tr>

    )
}


export const TableThead = (props: any) => {
    const {headers,filterData, sortData}=props;
   
       return (
        <thead>
        <tr className="text-dark">
            
        {
                headers.map((e: any) => {
                    if(e?.isShow===false){
                        return (
                          <>&nbsp;</>
                        );
                      }  
                    if (e.isSortable===true) {
                        return (
                            <th   onClick={() => { sortData(e)}}>{e.displayName}</th>
                        )
                    }
                   
                        return (
                            <th>&nbsp;</th>
                        )
                     
                   
                })
        }

        </tr>
       <TRSearchHeader headers={headers} filterData={filterData} />
  
</thead>
   
       )
   }