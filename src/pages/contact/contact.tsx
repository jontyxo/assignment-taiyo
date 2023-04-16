import React from 'react'
import ContactForm from '../../components/contactForm/ContactForm'
import ContactList from '../../components/contactList/contactList'
import "./contact.css"


const Contact = () => {
  return (
    <div className='contact'>
      <ContactForm />
    <ContactList />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1></div>
    
  )
}

export default Contact