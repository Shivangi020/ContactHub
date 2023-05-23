import React from 'react'
import {ImCross} from 'react-icons/im'


// Empty List component will render if contact list is empty
const EmptyList:React.FC=()=> {
  return (
    <div className='flex-col flex justify-center items-center sm:flex-row'>
       <ImCross className='sm:text-5xl sm:mr-5 text-red-700 text-3xl'/>
       <h1 className='sm:text-xl font-semibold text-sm'>No contacts found<br/>
         Please add contact from <br/>
         create contact button</h1>
    </div>
  )
}

export default EmptyList