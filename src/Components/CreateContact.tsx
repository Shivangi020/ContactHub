import React from "react";
import { ContactInfo } from "../model";
import EmptyList from "./EmptyList";
import ContactList from "./ContactList";
;

interface Props {
  activeScreen: string;
  setActiveScreen: React.Dispatch<React.SetStateAction<string>>;
  contacts: ContactInfo[];
  setContacts: React.Dispatch<React.SetStateAction<ContactInfo[]>>;
  setContactInfo:React.Dispatch<React.SetStateAction<ContactInfo>>
  contactInfo:ContactInfo
}

const CreateContact: React.FC<Props> = ({
  activeScreen,
  setActiveScreen,
  contacts,
  setContacts,
  contactInfo,setContactInfo
}) => {
  return (
    <div
      className={`${
        activeScreen === "ContactList"
          ? "flex flex-col justify-center h-full"
          : "flex flex-col justify-center h-full hidden"
      }`}
    >
      <div className="add-btn flex flex-col justify-center items-center">
        <button className="btn" onClick={() => setActiveScreen("InputContact")}>
          Create Contact
        </button>
      </div>
      <div className="contact-list flex justify-center items-center overflow-y-scroll flex-wrap gap-5 p-3">
        {contacts.length > 0 ? (
          <ContactList
            contacts={contacts}
            setContacts={setContacts}
            setActiveScreen={setActiveScreen}
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
          />
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  );
};

export default CreateContact;
