import React, { useState } from "react";
import CreateContact from "../Components/CreateContact";
import EditContact from "../Components/EditContact";
import InputContact from "../Components/InputContact";
import { ContactInfo } from "../model";


const Contact: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string>("ContactList");
  const [contactInfo ,setContactInfo] = useState<ContactInfo>({id:0,first_name:'',last_name:'',status:'active'});
  const [contacts ,setContacts] = useState<ContactInfo[]>([])

  return (
    <>
      <h1 className="text-3xl font-bold">Contacts</h1>
      <div className=" h-5/6 flex flex-col justify-center item-center">
        <CreateContact
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          contacts={contacts}
          setContacts={setContacts}
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
        />
      </div>
    </>
  );
};

export default Contact;
