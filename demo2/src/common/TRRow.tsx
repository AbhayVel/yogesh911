import React, { Children } from 'react';





export const TRRow = (props: any) => {
 const {headers,data,children }=props;

 return (
    <tr>
        
       {
         headers.map((e: any) => {
          if(e?.isShow===false){
            return (
              <>&nbsp;</>
            );
          }  
          if(e?.customDisplay){
            return (
              <td key={e.customDisplayIndex}>{ children[0][1][e?.customDisplayIndex] }</td>
          )
          }
                return (
                    <td key={e.customDisplayIndex}>{ data[e?.columnName] }</td>
                )
         })
       }
       
    </tr>

)
}

export const TableBody = (props: any) => {
  const {headers,tableData, children}=props;
 
  return (
    <tbody>

    {
        tableData?.map((s: any, i : number) => {
            return (
               <TRRow key={s.columnName}  headers={headers} data={s}>{children} </TRRow>

            )
        })									  
    }
</tbody>
 
 )
 }