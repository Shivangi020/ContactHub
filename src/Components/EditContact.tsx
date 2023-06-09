import React from "react";
import { ContactInfo } from "../model";

interface Props {
  activeScreen: string;
  setActiveScreen: React.Dispatch<React.SetStateAction<string>>;
  setContactInfo:React.Dispatch<React.SetStateAction<ContactInfo>>;
  contactInfo:ContactInfo;
  contacts :ContactInfo[];
  setContacts :React.Dispatch<React.SetStateAction<ContactInfo[]>>
}

const EditContact: React.FC<Props> = ({ activeScreen, setActiveScreen ,contactInfo,setContactInfo,contacts,setContacts}) => {

  const {id,first_name,last_name,status} = contactInfo
  
  // This function takes contact list and matches the id with contact which needs to be edit and updates it 
  const updateContact = (id:Number, contactInfo:ContactInfo) => {
      const newList = contacts.map(item =>
        item.id === id ? { ...contactInfo, first_name,last_name,status } : item
      )
    setContacts(newList)
  };


  // This is form action function which will execute updateContact function on submission
  const editFormAction = (e:React.FormEvent<EventTarget>)=>{
    e.preventDefault()
    if(contactInfo.first_name.length >0 && contactInfo.last_name.length >0){
      console.log(contactInfo)
      updateContact(id,contactInfo)
      setActiveScreen('ContactList')
    }else{
      alert('Please Fill the form')
    }
    setContactInfo({id:0,first_name:'',last_name:'',status:'active'})
  }

  return (
    <div
      className={`${
        activeScreen === "EditContact"
          ? "flex flex-col justify-center h-full"
          : "flex flex-col justify-center h-full hidden"
      }`}
    > 
      <div className="add-btn flex flex-col justify-center item-center screen mt-10">
        <h1 className="text-center tc-p text-3xl font-semibold">Edit Contact</h1>
      <form className="form" onSubmit={editFormAction}>
        <div className="mt-10 flex sm:flex-row flex-col justify-center md:w-4/5 items-center">
          <label className="md:text-xl font-bold text-sm">First name : </label>
          <input
            type="text"
            placeholder="first name"
            className="md:w-72 h-10 p-2 ml-2 w-4/5"
            value={first_name}
            onChange={(e)=>setContactInfo({...contactInfo,first_name:e.target.value})}
          ></input>
        </div>
        <div className="mt-10 flex sm:flex-row flex-col justify-center items-center md:w-4/5">
          <label className="md:text-xl font-bold text-sm">Last name : </label>
          <input
            type="text"
            placeholder="last name"
            className="md:w-72 h-10 p-2 ml-2 w-4/5"
            value={last_name}
            onChange={(e)=>setContactInfo({...contactInfo,last_name:e.target.value})}
          ></input>
        </div>
        <div className="mt-10 flex flex-col">
          <span className="text-xl font-bold">Status : </span>
          <label className="sm:text-xl">
            <input
              type="radio"
              name="status"
              value="active"
              className="w-5 h-5  ml-2 mr-2 rounded-full"
              checked ={status==='active'}
              onChange={(e)=>setContactInfo({...contactInfo,status:e.target.value})}
            />
            Active
          </label>
          <label className="sm:text-xl">
            <input
              type="radio"
              name="status"
              value="inactive"
              className="w-5 h-5 ml-2 mr-2 rounded-full"
              checked ={status==='inactive'}
              onChange={(e)=>setContactInfo({...contactInfo,status:e.target.value})}
            />
            Inactive
          </label>
        </div>
        <button className=" btn mt-10">Save Editted Contact</button>
      </form>
      </div>
      
    </div>
  );
};

export default EditContact;
