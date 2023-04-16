import React, { useRef, useState } from 'react'
import { useAppSelector } from '../../redux/store';
import { useDispatch } from 'react-redux'
import { addContact, editContact } from '../../redux/contactSlice';
import "./form.css"
interface Props  {
    id:number|undefined
}


const FormComponent:React.FunctionComponent<Props> = ({id}) => {
    const [isOpen,setIsOpen]=useState<boolean>(true);
   
    const handleToggle=()=>{
    setIsOpen(!isOpen);
    if(isOpen===false){
        setTimeout(()=>{
            setIsOpen(!isOpen);
        },1)
    }
    }
    const fnameRef=useRef<HTMLInputElement>(null);
    const lnameRef=useRef<HTMLInputElement>(null);
    

    const contacts = useAppSelector(state => state.contact.contacts);
    console.log(contacts)
const dispatch=useDispatch();
const handleAddContact=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
        console.log(fnameRef.current?.value)
        const fname=fnameRef.current?.value
        const lname=lnameRef.current?.value
        dispatch(editContact({id,fname,lname}))
    }
  return (
   <>
          {isOpen && 
            <div className="modalContact">
            
    <div className='addContact'><span className='addcontacthead'>Edit Contact</span>
        <form  className='contactform' onSubmit={handleAddContact}> 
        <label>First name</label>
        <input className='contactforminput' ref={fnameRef} type="text" name="firstName"  required={true}/>
        <label>Last name</label>
        
            <input className='contactforminput' ref={lnameRef} type="text" name="lastName"  required={true}/>
            <button className='addcontactbtn' type="submit">Edit Contact</button>

        </form>
        <button  className='formTogglebtn' onClick={handleToggle}>X</button>

        </div>
        </div>
    }
    </>
        
        )
}

export default FormComponent