import React, { useEffect, useState } from 'react';
 
 
export const InputQdn =(props: any)=>{

const {labelName,Id ,columnKey, columnvalue,placeholder,describedby, validations}=props;

const [isValid,setIsValid]=useState(false);
const [currentValue,setCurrentValue]=useState("");

const [messages,setMessages]=useState(["Id is require"]);

useEffect(()=>{
    setCurrentValue(columnvalue);
}, [])

const validateValue=(value: any)=>{
    debugger;
 const errorMessage: any=[];
 let checkValidate=true;
    validations.forEach((element: any) => {
        if(element.type==='required'){
            if(value===''){
                checkValidate=false;
                if(element.message){
                    errorMessage.push(element.message);
                } else {
                    errorMessage.push(`${columnKey} is required`);
                }
            }
        }

        if(value!==''){
            if(element.type==='number'){
                debugger;
                if(Number.isNaN(+value)){
                    checkValidate=false;
                    if(element.message){
                        errorMessage.push(element.message);
                    } else {
                        errorMessage.push(`${columnKey} should be number.`);
                    }
                }
            }
            if(element.type==='min'){
                debugger;
                if(+value < element.value ){
                    checkValidate=false;
                    if(element.message){
                        errorMessage.push(element.message);
                    } else {
                        errorMessage.push(`${columnKey} should be number.`);
                    }
                }
            }

        }
       
    });
 
    setIsValid(checkValidate);
    setMessages(errorMessage);
}
const handelChange=(key: any,value: any,eve: any)=>{

    validateValue(value);

    setCurrentValue(value)
}


    return (
        <div className="form-group">  
        <label htmlFor={Id}>{labelName}</label>
        <input type="text" onChange={(eve)=>{ handelChange(columnKey,eve.target.value,eve); eve.preventDefault(); }}  value={currentValue} className="form-control" name={Id} id={Id} aria-describedby={describedby} autoComplete='false' placeholder={placeholder} />
    {  !isValid &&    messages.map((e)=>{
            return (
                        <span className='error'>{e}</span>

            )
    })}
       </div>
    )
}


export const StudentAddEdit = (props: any) => {

    const {currentUser, onDataChange}=props;
const handelChange= (key: any,value: any,eve: any)=>{

    const data={...currentUser};
    data[key]=value;
    onDataChange(data);
    debugger;
}

debugger;
   return (
    <div>
<form>
 
 <InputQdn labelName="Id" columnKey="id" columnvalue={currentUser.id} validations={[{ type:'required' }, {type: 'number'}, {type: 'min', value: 5, message: "Id can't be lessthen 5"}]}  />

<div className="form-group">  
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="text" value={currentUser.id} onChange={(eve)=>{ handelChange('id',eve.target.value,eve); eve.preventDefault(); }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='false' placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
      </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
   )

}