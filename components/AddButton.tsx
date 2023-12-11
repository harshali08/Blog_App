import Link from 'next/link';
import React from 'react'
import { MdAdd } from "react-icons/md";

const AddButton = () => {
  return (
    <div className='flex  justify-between   ' style={{margin:"0 auto",width:"90%"}} >
    <div className='mt-10'>
      <h2 className='text-2xl sm:text-4xl sm:ms-28 font-bold font-serif  '> All Blogs</h2>
     
    </div >
    <Link href={'/blog/add'}>    <button className='flex flex-row mt-10 px-2 py-1 font-semibold rounded  sm:text-xl bg-violet-950 text-white sm:font-bold sm:px-2 sm:py-2 ' >Add a Blog 🚀 </button>
</Link>
    </div>
  )
}

export default AddButton

