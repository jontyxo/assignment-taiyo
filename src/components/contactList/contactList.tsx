import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { deleteContact } from '../../redux/contactSlice';
import {  useDispatch} from "react-redux";
import "./contactList.css"
import FormComponent from '../editformComponent/form';



const ContactList = () => {
    const contacts = useAppSelector(state => state.contact.contacts);
  const [editOpen,setEditOpen]=useState<boolean>(false)
  const [currId,setCurrId]=useState<number|undefined>();
const dispatch =useDispatch();
const handleEdit=(id:number)=>{
  setEditOpen(!editOpen)
  setCurrId(id);
}
if(contacts.length===0){
  return (
    <p className='nocontactlist'>No Contacts Now!😓 <br /> Use the Button</p>
  )
}
  return (
    <>
   
 {editOpen && <FormComponent id={currId} /> }
    <div className="contactListSection">
   {contacts&& contacts?.map(contact =>(
     <div className="contactList">
    <span className="contactDetail">Contact Info:</span>
    <span className="contactDetail"> First Name: {contact.firstName}</span>
    <span className="contactDetail">Last Name: {contact.lastName}</span>
   
<div className="contactButton">
     <button className='deletebtn' onClick={()=>dispatch(deleteContact(contact.id))}>Delete</button>
     <button className='deletebtn' onClick={() => handleEdit(contact.id)}>Edit</button>

  </div>    
   </div>

   ))}
    </div>
     </>
  )
}

export default ContactList