
export const filterCommon=(fullData: any, headers: any)=>{
  let rows=fullData;

  for(let i=0;i<headers.length;i+=1){
      const searchs: Array<any> | undefined=headers[i]?.searchs;
      if(searchs===undefined){
          continue;
      }
      for(let j=0;j<searchs?.length;j+=1){
              const search=searchs[j];
              rows = rows.filter((e: any) => {
                  if (search.value === '' || search.value === undefined || search.value ===null ) {
                      return true;
                  }
                  if (search.type === 'num') {
                      return (+e[search.columnName]) === (+search.value);
                  } else if (search.type === 'ci') {
                      return e[search.columnName]?.toLowerCase()?.indexOf(search?.value?.toLowerCase()) > -1;
                  } else if (search.type === 'cs') {
                      return e[search.columnName].indexOf(search.value) > -1;
                  }  else if (search.type === 'GteNum') {
                
                      return (+e[search.columnName]) >= (+search.value);
                  }    else if (search.type === 'LteNum') {
                      return (+e[search.columnName]) <= (+search.value);
                  }         
                  return (e[search.columnName]) === (search.value);
              
           })
      }
  }

  return rows;
}


export const  convertDate =(str: any)=> {
  if (str instanceof Date) {
      return str;
  }
  const dateArray = str.split('-');
  if (dateArray.length === 3) {

      return new Date((+dateArray[2]), (+dateArray[1]) - 1, (+dateArray[0]), 0, 0, 0, 0);
  }
  return "not a Date"
}