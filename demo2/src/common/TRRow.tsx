import React, { Children } from 'react';
import { GetComplexObjectValue } from './utilities-functions';

export const TRTDContext=React.createContext(null);



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
              <TRTDContext.Provider value={props}>
              <td key={e.customDisplayIndex}>{ children[0][1][e?.customDisplayIndex] }</td>
              </TRTDContext.Provider>
          )
          }
                return (
                    <td key={e.customDisplayIndex}>{GetComplexObjectValue( data,e?.columnName)}</td>
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