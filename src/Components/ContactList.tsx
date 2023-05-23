import React from 'react'
import { ContactInfo } from '../model';
import Card from './Card';

interface Props{
  contacts :ContactInfo[];
}

const ContactList :React.FC<Props>=({contacts})=>{
  console.log(contacts)
  return (
    <>
      {contacts.map((contact)=>{
        return <Card contactInfo={contact}/>
      })}
    </>
  )
}

export default ContactList