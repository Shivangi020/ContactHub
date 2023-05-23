import React from "react";
import { ContactInfo } from "../model";
import Card from "./Card";

interface Props {
  contacts: ContactInfo[];
  setContacts: React.Dispatch<React.SetStateAction<ContactInfo[]>>;
  setActiveScreen: React.Dispatch<React.SetStateAction<string>>;
  setContactInfo: React.Dispatch<React.SetStateAction<ContactInfo>>;
  contactInfo: ContactInfo;
}

const ContactList: React.FC<Props> = ({
  contacts,
  setContacts,
  setActiveScreen,
  contactInfo,
  setContactInfo,
}) => {
  //  Function for deleting contacts
  const deleteContact = (id: Number) => {
    const newList = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newList);
  };

  // function to render edit contact screen and setting the input contact info with current values
  const editContact = (
    id: Number,
    first_name: string,
    last_name: string,
    status: string
  ) => {
    setActiveScreen("EditContact");
    console.log(first_name, last_name, status, id);
    setContactInfo({ id, first_name, last_name, status });
  };

  // Function to render the detail screen to view contacts details and also access contacts details
  const viewContactDetail = (contactInfo:ContactInfo) => {
    setActiveScreen("ViewDetail");
    setContactInfo(contactInfo)
  };
  
  return (
    <>
      {contacts.map((contact) => {
        const { id } = contact;
        return (
          <Card
            contactInfo={contact}
            deleteContact={() => deleteContact(id)}
            editContact={(id, first_name, last_name, status) =>
              editContact(id, first_name, last_name, status)
            }
            viewDetail={()=>viewContactDetail(contact)}
          />
        );
      })}
    </>
  );
};

export default ContactList;
