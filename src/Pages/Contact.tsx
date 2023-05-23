import React, { useState } from "react";
import CreateContact from "../Components/CreateContact";
import EditContact from "../Components/EditContact";
import InputContact from "../Components/InputContact";
import { ContactInfo } from "../model";
import ViewContact from "../Components/ViewContact";


const Contact: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string>("ContactList");
  const [contactInfo ,setContactInfo] = useState<ContactInfo>({id:0,first_name:'',last_name:'',status:'active'});
  const [contacts ,setContacts] = useState<ContactInfo[]>([])

  // In below three screen has been rendering 
  // first Create contact screen with required props which includes create contact button and contact list
  // second Input Contact screen which have form with input for first name , last name and status
  // third Edit Contact screen which have form with current contact info which needs to be editted
  // fourth View Contact detail 
  return (
    <>
      <h1 className="text-3xl font-bold tc-p">Contacts</h1>
      <div className=" h-5/6 flex flex-col justify-center item-center">
        <CreateContact
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          contacts={contacts}
          setContacts={setContacts}
          contactInfo ={contactInfo}
          setContactInfo={setContactInfo}
        />
        <InputContact
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          contactInfo ={contactInfo}
          setContactInfo={setContactInfo}
          contacts = {contacts}
          setContacts = {setContacts}
        />
        <EditContact
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          contactInfo={contactInfo} 
          setContactInfo={setContactInfo}
          contacts={contacts}
          setContacts={setContacts}
        />
        <ViewContact
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        contactInfo={contactInfo}
        />
      </div>
    </>
  );
};

export default Contact;
