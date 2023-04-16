import React from 'react'
import ContactForm from '../../components/contactForm/ContactForm'
import ContactList from '../../components/contactList/contactList'


const Contact = () => {
  return (
    <div style={{display:'flex',alignItems: 'center',flexDirection: 'column'}}>
      <ContactForm />
    <ContactList /></div>
  )
}

export default Contact