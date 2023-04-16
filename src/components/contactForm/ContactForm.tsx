import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../redux/contactSlice';
import { useAppSelector } from '../../redux/store';
type Props = {}


const ContactForm = (props: Props) => {
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

        dispatch(addContact({fname,lname}))
    }
   

  return (
    <div>Add Contact
        <form  onSubmit={handleAddContact}> 
            <input ref={fnameRef} type="text" name="firstName" placeholder='first name' required={true}/>
            <input ref={lnameRef} type="text" name="lastName" placeholder='last name' required={true}/>
            <button type="submit">Save Contact</button>
        </form>
    </div>
  )
}

export default ContactForm



