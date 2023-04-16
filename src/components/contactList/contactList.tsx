import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { deleteContact } from '../../redux/contactSlice';
import {  useDispatch} from "react-redux";



const ContactList = () => {
    const contacts = useAppSelector(state => state.contact.contacts);
    const handleDelete=(id:number)=>{
dispatch(deleteContact(id))        
    }
const dispatch =useDispatch();
  return (
    <div>

   {contacts.map(contact =>(
   <div>
    Contact Info:
    First Name: {contact.firstName}
    Last Name: {contact.lastName}
     <button onClick={()=>dispatch(deleteContact(contact.id))}>click</button>
   </div>

   ))}
    </div>
  )
}

export default ContactList