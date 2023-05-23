import React from 'react'
import {ImCross} from 'react-icons/im'


// Empty List component will render if contact list is empty
const EmptyList:React.FC=()=> {
  return (
    <div className='flex justify-center items-center'>
       <ImCross className='text-5xl mr-5 text-red-700'/>
       <h1 className='text-xl font-semibold'>No contacts found<br/>
         Please add contact from <br/>
         create contact button</h1>
    </div>
  )
}

export default EmptyList