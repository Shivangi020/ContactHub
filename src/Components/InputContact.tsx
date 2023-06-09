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
  
   
  const {id,first_name,last_name,status} = contactInfo
  // On submission of this form a new contactInfo will be added in contact list and then again inputs will default value
  const formAction =(e: React.FormEvent<EventTarget>) :void=>{
    e.preventDefault()
    if(contactInfo.first_name.length >0 && contactInfo.last_name.length >0){
      setContacts([...contacts,{...contactInfo,id:Date.now()}])
      setActiveScreen('ContactList')
    }else{
      alert('Please Fill the form')
    }
    setContactInfo({id:0,first_name:'',last_name:'',status:'active'})
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
        <div className=" mt-10 flex sm:flex-row flex-col justify-center md:w-4/5 items-center" >
          <label className="md:text-xl font-bold text-sm">First name : </label>
          <input
          value={first_name}
            type="text"
            placeholder="first name"
            className="md:w-72 h-10 p-2 ml-2 w-4/5"
            onChange={(e)=>setContactInfo({...contactInfo,first_name:e.target.value})}
          ></input>
        </div>
        <div className="mt-10 flex sm:flex-row flex-col justify-center items-center md:w-4/5">
          <label className="md:text-xl font-bold text-sm">Last name : </label>
          <input
          value={last_name}
            type="text"
            placeholder="last name"
            className="md:w-72 h-10 p-2 ml-2 w-4/5"
            onChange={(e)=>setContactInfo({...contactInfo,last_name:e.target.value})}
          ></input>
        </div>
        <div className="mt-10 flex flex-col">
          <span className="sm:text-xl font-bold">Status : </span>
          <label className="sm:text-xl">
            <input
              type="radio"
              name="status"
              value="active"
              className="w-5 h-5  ml-2 mr-2 rounded-full"
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
