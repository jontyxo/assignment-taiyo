import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { deleteContact } from '../../redux/contactSlice';
import {  useDispatch} from "react-redux";
import "./contactList.css"



const ContactList = () => {
    const contacts = useAppSelector(state => state.contact.contacts);
    const handleDelete=(id:number)=>{
dispatch(deleteContact(id))        
    }
const dispatch =useDispatch();
if(contacts.length===0){
  return (
    <p className='nocontactlist'>No Contacts Now! <br /> use the form to add</p>
  )
}
  return (
    <>

    <div className="contactListSection">
   {contacts&& contacts?.map(contact =>(
     <div className="contactList">
    <span className="contactDetail">Contact Info:</span>
    <span className="contactDetail"> First Name: {contact.firstName}</span>
    <span className="contactDetail">Last Name: {contact.lastName}</span>
   
<div className="contactButton">
     <button className='deletebtn' onClick={()=>dispatch(deleteContact(contact.id))}>Delete</button>
  </div>    
   </div>

   ))}
    </div>
     </>
  )
}

export default ContactList