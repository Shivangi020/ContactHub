import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { ContactInfo } from "../model";
import { AiFillDelete, AiFillEye,AiFillEdit } from "react-icons/ai";

interface Props {
  contactInfo: ContactInfo;
  deleteContact:(id:Number)=>void
  editContact : (id:Number,first_name:string,last_name:string,status:string)=>void
  viewDetail:(contactInfo:ContactInfo)=>void
}

const Card: React.FC<Props> = ({ contactInfo,deleteContact,editContact,viewDetail }) => {
  const { first_name, last_name, status,id } = contactInfo;
  
  return (
    <div className="flex flex-col justify-center items-center h-36 w-48 bg-white rounded-md">
      <FaUserCircle className="text-5xl " />
      <p className='text-sm text-center'>
        {first_name} {last_name}
      </p>
      <p className='text-sm text-center'>{status}</p>
      <div className="flex mt-2 justify-around w-full">
        <AiFillDelete
          className="text-red-500 text-2xl cursor-pointer"
          onClick={() => deleteContact(id)}
        />
         <AiFillEye className="text-green-600 text-2xl cursor-pointer" onClick={()=>viewDetail(contactInfo)}/>
        <AiFillEdit className="text-blue-600 text-2xl cursor-pointer" onClick={()=>editContact(id,first_name,last_name,status)} />
      </div>
    </div>
  );
};

export default Card;
