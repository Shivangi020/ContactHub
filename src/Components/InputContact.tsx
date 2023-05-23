import React from "react";
import { ContactInfo } from "../model";

interface Props {
  activeScreen: string;
  setActiveScreen: React.Dispatch<React.SetStateAction<string>>;
  contactInfo:ContactInfo;
  setContactInfo:React.Dispatch<React.SetStateAction<ContactInfo>>;
  contacts :ContactInfo[];
  setContacts :React.Dispatch<React.SetStateAction<ContactInfo[]>>
}



const InputContact: React.FC<Props> = ({ activeScreen, setActiveScreen ,contactInfo,setContactInfo,contacts,setContacts}) => {
  
  const formAction =(e: React.FormEvent<EventTarget>) :void=>{
    e.preventDefault()
    if(contactInfo.first_name.length >0 && contactInfo.last_name.length >0){
      setContacts([...contacts,{...contactInfo,id:Date.now()}])
      setActiveScreen('ContactList')
    }else{
      alert('Please Fill the form')
    }
  }

  return (
    <div
      className={`${
        activeScreen === "InputContact"
          ? "flex flex-col justify-center item-center h-5/6 mt-10 screen"
          : " flex flex-col justify-center item-center h-5/6 mt-10 screen hidden"
      }`}
    >
      <form className="form" onSubmit={formAction}>
        <div className=" mt-10">
          <label className="text-xl font-bold">First name : </label>
          <input
            type="text"
            placeholder="first name"
            className="w-72 h-10 p-2 ml-2"
            onChange={(e)=>setContactInfo({...contactInfo,first_name:e.target.value})}
          ></input>
        </div>
        <div className="mt-10">
          <label className="text-xl font-bold">Last name : </label>
          <input
            type="text"
            placeholder="last name"
            className="w-72 h-10 p-2 ml-2"
            onChange={(e)=>setContactInfo({...contactInfo,last_name:e.target.value})}
          ></input>
        </div>
        <div className="mt-10 flex flex-col">
          <span className="text-xl font-bold">Status : </span>
          <label className="text-xl">
            <input
              type="radio"
              name="status"
              value="active"
              className="w-5 h-5  ml-2 mr-2 rounded-full"
              onChange={(e)=>setContactInfo({...contactInfo,status:e.target.value})}
            />
            Active
          </label>
          <label className="text-xl">
            <input
              type="radio"
              name="status"
              value="inactive"
              className="w-5 h-5 ml-2 mr-2 rounded-full"
              onChange={(e)=>setContactInfo({...contactInfo,status:e.target.value})}
            />
            Inactive
          </label>
        </div>
        <button className="btn mt-10">Save Contact</button>
      </form>
    </div>
  );
};

export default InputContact;
