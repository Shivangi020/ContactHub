import React from 'react'
import { ContactInfo } from '../model';
import { FaUserCircle } from "react-icons/fa";

interface Props {
    activeScreen: string;
    setActiveScreen: React.Dispatch<React.SetStateAction<string>>;
    contactInfo :ContactInfo
}

const ViewContact:React.FC<Props>=({activeScreen,setActiveScreen,contactInfo})=> {
    const {first_name,last_name,status} = contactInfo
  return (
    <div   className={`${
        activeScreen === "ViewDetail"
          ? "flex flex-col justify-center h-full screen mt-10 items-center"
          : "flex flex-col justify-center h-full hidden"
      }`}>
        <div className='text-center flex flex-col justify-center items-center'>
            <FaUserCircle className="text-5xl"/>
            <h2 className='text-xl font-semibold'>First Name : {first_name}</h2>
            <h2 className='text-xl font-semibold'>Last Name : {last_name}</h2>
            <h2 className='text-xl font-semibold'>Status: {status}</h2>
            <h2 className='text-xl font-semibold'>Other Details</h2>
        </div>
       <button className='btn mt-10' onClick={()=>setActiveScreen('ContactList')}>Go back</button>
      </div>
  )
}

export default ViewContact