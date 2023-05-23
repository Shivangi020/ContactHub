import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { ContactInfo } from '../model'

interface Props {
  contactInfo :ContactInfo
}

const Card:React.FC<Props>=({contactInfo})=> {
  const{first_name ,last_name,status} = contactInfo
  return (
    <div className='flex flex-col justify-center items-center h-44 w-44 bg-white rounded-md'>
       <FaUserCircle className='text-5xl '/>
        <p>{first_name} {last_name}</p>
        <p>{status}</p>
    </div>
  )
}

export default Card