import React, { useRef, useState } from 'react'
import "./ContactForm.css"
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactSlice';
import { useAppSelector } from '../../redux/store';
type Props = {}


const ContactForm = (props: Props) => {
    const fnameRef=useRef<HTMLInputElement>(null);
    const lnameRef=useRef<HTMLInputElement>(null);
    const [isOpen,setIsOpen]=useState<boolean>(false);
    const contacts = useAppSelector(state => state.contact.contacts);
    console.log(contacts)
const dispatch=useDispatch();
const handleToggle=()=>{
setIsOpen(!isOpen);
}

    const handleAddContact=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
        console.log(fnameRef.current?.value)
        const fname=fnameRef.current?.value
        const lname=lnameRef.current?.value

        dispatch(addContact({fname,lname}))
    }
   

  return (
    <>
    {isOpen && 
    <div className="modalContact">

    <div className='addContact'><span className='addcontacthead'>Add Contact</span>
        <form  className='contactform' onSubmit={handleAddContact}> 
        <label>First name</label>
            <input className='contactforminput' ref={fnameRef} type="text" name="firstName"  required={true}/>
        <label>Last name</label>

            <input className='contactforminput' ref={lnameRef} type="text" name="lastName"  required={true}/>
            <button className='addcontactbtn' type="submit">Save Contact</button>

        </form>
        <button  className='formTogglebtn' onClick={handleToggle}>X</button>

    </div>
    </div>}
    <button  className='contactToggleBtn' onClick={handleToggle}>Add Contact</button>
    </>
  )
}

export default ContactForm



